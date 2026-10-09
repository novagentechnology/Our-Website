package com.novagen;

import com.novagen.controller.ContactController;
import com.novagen.dto.ContactRequestDto;
import com.novagen.model.ContactEnquiry;
import com.novagen.service.ContactService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = {ContactController.class, com.novagen.controller.HealthController.class})
public class ContactControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ContactService contactService;

    @Test
    @DisplayName("GET /api/health should return UP status")
    void healthCheckShouldReturnOk() throws Exception {
        mockMvc.perform(get("/api/health"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data.status").value("UP"));
    }

    @Test
    @DisplayName("POST /api/contact with valid data should return 201 Created")
    void submitValidContactEnquiry() throws Exception {
        ContactEnquiry mockSaved = new ContactEnquiry();
        mockSaved.setId("test-12345");
        Mockito.when(contactService.saveEnquiry(any(ContactRequestDto.class))).thenReturn(mockSaved);

        String jsonPayload = """
                {
                    "fullName": "Jane Doe",
                    "email": "jane.doe@example.com",
                    "companyName": "Acme Ventures",
                    "projectType": "Web Application Development",
                    "estimatedBudget": "$5,000 - $10,000",
                    "projectDescription": "We require a customer dashboard with real-time analytics."
                }
                """;

        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonPayload))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.data.referenceId").value("test-12345"));
    }

    @Test
    @DisplayName("POST /api/contact with invalid email should return 400 Bad Request")
    void submitInvalidContactEnquiry() throws Exception {
        String invalidJsonPayload = """
                {
                    "fullName": "",
                    "email": "not-an-email",
                    "projectType": "",
                    "projectDescription": "Too short"
                }
                """;

        mockMvc.perform(post("/api/contact")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidJsonPayload))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").value(false))
                .andExpect(jsonPath("$.errors.email").exists());
    }
}
