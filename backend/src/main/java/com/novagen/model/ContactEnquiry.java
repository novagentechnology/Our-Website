package com.novagen.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "contact_enquiries")
public class ContactEnquiry {

    @Id
    private String id;
    private String fullName;
    private String email;
    private String companyName;
    private String projectType;
    private String estimatedBudget;
    private String projectDescription;
    private String preferredContactMethod;
    private String status;
    private Instant createdAt;

    public ContactEnquiry() {
        this.createdAt = Instant.now();
        this.status = "NEW";
    }

    public ContactEnquiry(String fullName, String email, String companyName, String projectType,
                          String estimatedBudget, String projectDescription, String preferredContactMethod) {
        this();
        this.fullName = fullName;
        this.email = email;
        this.companyName = companyName;
        this.projectType = projectType;
        this.estimatedBudget = estimatedBudget;
        this.projectDescription = projectDescription;
        this.preferredContactMethod = preferredContactMethod;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
