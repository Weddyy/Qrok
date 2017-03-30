package com.example.services;

import com.example.models.Notification;
import org.springframework.stereotype.Service;

/**
 * Created by weddy on 28.03.17.
 */
@Service
public interface SocketService {

    /**
     * Send notification
     * @param notification
     */
    void notify(Notification notification);
}
