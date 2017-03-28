package com.example.services;

import com.example.models.Alert;
import com.example.models.Information;
import com.example.models.Notification;
import com.example.models.exceptions.NullNotificationException;
import com.example.repositorys.TempRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;

/**
 * Created by weddy on 28.03.17.
 */
public class UiServiceImpl implements SocketService {

    private static final String MAIN_CHANEL = "/socket/main";


    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private TempRepository tempRepository;

    /**
     * Send notify for user(users).
     * @param notification Notification
     */
    @Override
    public void notify(Notification notification) {
        if(notification == null)
            throw new NullNotificationException();

        if(notification instanceof Alert)
            AlertNotify((Alert)notification);

        else if(notification instanceof Information)
            InformationNotify((Information)notification);
    }

    private void AlertNotify(Alert alert)
    {
        if(alert.getUserName() == null || alert.getUserName().isEmpty())
        {
            simpMessagingTemplate.convertAndSend(MAIN_CHANEL,alert);
        }else
        {
            simpMessagingTemplate.convertAndSendToUser(alert.getUserName(),MAIN_CHANEL,alert);
        }
    }

    private void InformationNotify(Information information)
    {
        tempRepository.getInformationList().put(information.getKey(),information);
        simpMessagingTemplate.convertAndSend(MAIN_CHANEL,information);
    }
}
