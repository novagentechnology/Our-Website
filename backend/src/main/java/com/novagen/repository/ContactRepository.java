package com.novagen.repository;

import com.novagen.model.ContactEnquiry;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends MongoRepository<ContactEnquiry, String> {
    List<ContactEnquiry> findByEmailOrderByCreatedAtDesc(String email);
    List<ContactEnquiry> findAllByOrderByCreatedAtDesc();
}
