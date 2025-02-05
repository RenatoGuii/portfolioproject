package com.renatoguimaraes.portfolioapi.dtos;

import jakarta.validation.constraints.NotBlank;
import org.springframework.web.bind.annotation.RequestParam;

public record EmailDTO(@RequestParam("name") String name,
                       @RequestParam("email") String email,
                       @RequestParam("message") String message) {
}
