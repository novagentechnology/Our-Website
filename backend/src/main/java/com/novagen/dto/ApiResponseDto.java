package com.novagen.dto;

import java.time.Instant;
import java.util.Map;

public class ApiResponseDto<T> {

    private boolean success;
    private String message;
    private T data;
    private Map<String, String> errors;
    private Instant timestamp;

    public ApiResponseDto() {
        this.timestamp = Instant.now();
    }

    public ApiResponseDto(boolean success, String message, T data) {
        this.timestamp = Instant.now();
        this.success = success;
        this.message = message;
        this.data = data;
    }

    public ApiResponseDto(boolean success, String message, Map<String, String> errors) {
        this.timestamp = Instant.now();
        this.success = success;
        this.message = message;
        this.errors = errors;
    }

    public static <T> ApiResponseDto<T> ok(String message, T data) {
        return new ApiResponseDto<>(true, message, data);
    }

    public static <T> ApiResponseDto<T> ok(String message) {
        return new ApiResponseDto<>(true, message, null);
    }

    public static <T> ApiResponseDto<T> error(String message) {
        return new ApiResponseDto<>(false, message, null);
    }

    public static <T> ApiResponseDto<T> validationError(String message, Map<String, String> errors) {
        return new ApiResponseDto<>(false, message, errors);
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public Map<String, String> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, String> errors) {
        this.errors = errors;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }
}
