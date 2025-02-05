package com.renatoguimaraes.portfolioapi.controllers;

import com.renatoguimaraes.portfolioapi.dtos.EmailDTO;
import com.renatoguimaraes.portfolioapi.services.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/email")
@CrossOrigin(origins = {"http://localhost:3000", "https://renatoguimaraes.vercel.app"})
public class EmailController {

    @Autowired
    EmailService emailService;

    @PostMapping
    public ResponseEntity<String> SendEmail(@Valid EmailDTO data) {
        Boolean response = emailService.sendMail(data);

        if (response) {
            return ResponseEntity.status(HttpStatus.OK).body("Email enviado com sucesso!");
        }

        return null;
    }

}
