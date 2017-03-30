package com.example.models;

import lombok.Data;

/**
 * Created by weddy on 28.03.17.
 */
@Data
public class Alert implements Notification {
    private String text;
    private int severity;
    private String userName;
}
