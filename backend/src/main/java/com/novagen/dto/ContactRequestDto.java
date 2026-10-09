package com.novagen.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactRequestDto {

    @NotBlank(message = "Full name is required")
    @Size(min = 2, max = 100, message = "Full name must be between 2 and 100 characters")
    private String fullName;

    @NotBlank(message = "Email address is required")
    @Email(message = "Please provide a valid email address")
    @Size(max = 120, message = "Email cannot exceed 120 characters")
    private String email;

    @Size(max = 100, message = "Company name cannot exceed 100 characters")
    private String companyName;

    @NotBlank(message = "Project type is required")
    @Size(max = 80, message = "Project type cannot exceed 80 characters")
    private String projectType;

    @Size(max = 60, message = "Estimated budget cannot exceed 60 characters")
    private String estimatedBudget;

    @NotBlank(message = "Project description is required")
    @Size(min = 10, max = 2500, message = "Project description must be between 10 and 2500 characters")
    private String projectDescription;

    @Size(max = 50, message = "Preferred contact method cannot exceed 50 characters")
    private String preferredContactMethod;

    // Honeypot field for spam prevention
    private String honeypot;

    public ContactRequestDto() {}

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType;
    }

    public String getEstimatedBudget() {
        return estimatedBudget;
    }

    public void setEstimatedBudget(String estimatedBudget) {
        this.estimatedBudget = estimatedBudget;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public String getPreferredContactMethod() {
        return preferredContactMethod;
    }

    public void setPreferredContactMethod(String preferredContactMethod) {
        this.preferredContactMethod = preferredContactMethod;
    }

    public String getHoneypot() {
        return honeypot;
    }

    public void setHoneypot(String honeypot) {
        this.honeypot = honeypot;
    }
}
