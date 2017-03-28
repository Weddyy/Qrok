package com.example.models.exceptions;

/**
 * Created by weddy on 28.03.17.
 */
public class NullNotificationException extends RuntimeException{


    public NullNotificationException()
    {
        super("Notification is null");
    }
}
