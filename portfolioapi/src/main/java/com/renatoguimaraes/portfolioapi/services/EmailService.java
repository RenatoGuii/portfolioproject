package com.renatoguimaraes.portfolioapi.services;

import com.renatoguimaraes.portfolioapi.dtos.EmailDTO;
import com.renatoguimaraes.portfolioapi.exceptions.SendEmailException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    JavaMailSender javaMailSender;

    @Value("${spring.mail.username}")
    private String destinatario;

    public Boolean sendMail(EmailDTO data) {
        try {
            SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
            simpleMailMessage.setFrom(data.email());
            simpleMailMessage.setTo(destinatario);
            simpleMailMessage.setSubject("Nova mensagem de: " + data.name());

            String body = "Nome: " + data.name() + "\n\n"
                        + "Email: " + data.email() + "\n\n"
                        + "Mensagem:\n" + data.message();
            simpleMailMessage.setText(body);

            javaMailSender.send(simpleMailMessage);
            return true;
        } catch (Exception e) {
            throw new SendEmailException(e.getMessage());
        }
    }

}
