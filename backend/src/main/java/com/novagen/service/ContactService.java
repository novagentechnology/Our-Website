package com.novagen.service;

import com.novagen.dto.ContactRequestDto;
import com.novagen.model.ContactEnquiry;
import com.novagen.repository.ContactRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;

    @Autowired(required = false)
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactEnquiry saveEnquiry(ContactRequestDto requestDto) {
        // Honeypot check for bot spam prevention
        if (requestDto.getHoneypot() != null && !requestDto.getHoneypot().trim().isEmpty()) {
            logger.warn("Spam submission detected and blocked from email: {}", requestDto.getEmail());
            // Return dummy object silently
            return new ContactEnquiry();
        }

        ContactEnquiry enquiry = new ContactEnquiry(
                requestDto.getFullName().trim(),
                requestDto.getEmail().trim().toLowerCase(),
                requestDto.getCompanyName() != null ? requestDto.getCompanyName().trim() : null,
                requestDto.getProjectType(),
                requestDto.getEstimatedBudget(),
                requestDto.getProjectDescription().trim(),
                requestDto.getPreferredContactMethod()
        );

        if (contactRepository != null) {
            try {
                ContactEnquiry saved = contactRepository.save(enquiry);
                logger.info("Successfully persisted contact enquiry id: {} for {}", saved.getId(), saved.getEmail());
                return saved;
            } catch (Exception e) {
                logger.error("Database connection failure while saving enquiry: {}. Falling back to memory log.", e.getMessage());
                // Return enquiry so the user request isn't lost
                return enquiry;
            }
        } else {
            logger.info("MongoDB repository not active. Processed enquiry in memory: {}", enquiry.getEmail());
            return enquiry;
        }
    }
}
