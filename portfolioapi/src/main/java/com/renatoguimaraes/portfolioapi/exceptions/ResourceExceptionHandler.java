package com.renatoguimaraes.portfolioapi.exceptions;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ResourceExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<StandartError> invalidInformation(HttpServletRequest request) {
        StandartError err = new StandartError();
        err.setTimeStamp(Instant.now());
        err.setStatus(HttpStatus.NOT_FOUND.value());
        err.setError("Invalid Values");
        err.setMsg("Invalid or null values");
        err.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

    @ExceptionHandler(SendEmailException.class)
    public ResponseEntity<StandartError> sendEmailError(SendEmailException e, HttpServletRequest request) {
        StandartError err = new StandartError();
        err.setTimeStamp(Instant.now());
        err.setStatus(HttpStatus.NOT_FOUND.value());
        err.setError("Send Email Error");
        err.setMsg(e.getMessage());
        err.setPath(request.getRequestURI());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(err);
    }

}
