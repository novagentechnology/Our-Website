package com.novagen.controller;

import com.novagen.dto.ApiResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000", "http://127.0.0.1:5173"})
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<ApiResponseDto<Map<String, Object>>> checkHealth() {
        Map<String, Object> healthData = new HashMap<>();
        healthData.put("status", "UP");
        healthData.put("service", "Nova@Gen Technologies API");
        healthData.put("version", "1.0.0");
        healthData.put("timestamp", Instant.now());

        return ResponseEntity.ok(ApiResponseDto.ok("Nova@Gen Technologies API is operational", healthData));
    }
}
