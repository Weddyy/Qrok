package com.example.models.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by weddy on 28.03.17.
 */
@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class NullNotificationException extends RuntimeException{

    public NullNotificationException()
    {
        super("Notification is null");
    }
}
