package com.example.models;

import lombok.Data;

/**
 * Created by weddy on 28.03.17.
 */
@Data
public class Information implements Notification {
    private String key;
    private String value;
}
