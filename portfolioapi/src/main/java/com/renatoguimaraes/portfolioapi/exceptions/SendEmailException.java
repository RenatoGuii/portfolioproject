package com.renatoguimaraes.portfolioapi.exceptions;

public class SendEmailException extends RuntimeException {
    public SendEmailException (String msg) {
        super(msg);
    }
}
