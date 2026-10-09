package com.novagen.controller;

import com.novagen.dto.ApiResponseDto;
import com.novagen.dto.ContactRequestDto;
import com.novagen.model.ContactEnquiry;
import com.novagen.service.ContactService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"})
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);
    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/contact")
    public ResponseEntity<ApiResponseDto<Map<String, Object>>> submitContactEnquiry(
            @Valid @RequestBody ContactRequestDto contactRequest) {

        logger.info("Received contact enquiry from: {} for project: {}", contactRequest.getEmail(), contactRequest.getProjectType());

        ContactEnquiry savedEnquiry = contactService.saveEnquiry(contactRequest);

        Map<String, Object> responseData = new HashMap<>();
        responseData.put("referenceId", savedEnquiry.getId() != null ? savedEnquiry.getId() : "NVG-" + System.currentTimeMillis());
        responseData.put("receivedAt", savedEnquiry.getCreatedAt());
        responseData.put("status", "RECEIVED");

        return ResponseEntity.status(HttpStatus.CREATED).body(
                ApiResponseDto.ok("Thank you for reaching out! We have received your project enquiry and our team will get back to you within 24-48 business hours.", responseData)
        );
    }
}
