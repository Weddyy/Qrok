package com.example.services;

import com.example.models.Alert;
import com.example.models.Information;
import com.example.models.Notification;
import com.example.models.exceptions.NullNotificationException;
import com.example.repositorys.TempRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.HashMap;
import java.util.Map;

import static org.mockito.Mockito.*;

/**
 * Created by weddy on 29.03.17.
 */
@RunWith(MockitoJUnitRunner.class)
public class UiServiceImplTest {

    @Mock
    private SimpMessagingTemplate simpMessagingTemplate;

    @Mock
    private TempRepository tempRepository;

    @InjectMocks
    private UiServiceImpl uiService;

    @Before
    public void onSetup()
    {
        Map<String ,Information> map = new HashMap<>();
        when(tempRepository.getInformationList()).thenReturn(map);
    }

    @Test
    public void notifySendAlert() {
        Alert alert = new Alert();
        alert.setText("Test text");
        alert.setSeverity(1);

        uiService.notify(alert);

        verify(simpMessagingTemplate,atLeastOnce()).convertAndSend("/socket/main",alert);
    }

    @Test
    public void notifySendAlertEmptyUser() {
        Alert alert = new Alert();
        alert.setText("Test text");
        alert.setSeverity(1);
        alert.setUserName("");

        uiService.notify(alert);

        verify(simpMessagingTemplate,atLeastOnce()).convertAndSend("/socket/main",alert);
    }

    @Test
    public void notifySendAlertAddUser() {
        String username = "name";
        Alert alert = new Alert();
        alert.setText("Test text");
        alert.setSeverity(1);
        alert.setUserName(username);

        uiService.notify(alert);

        verify(simpMessagingTemplate,never()).convertAndSend("/socket/main",alert);
        verify(simpMessagingTemplate,atLeastOnce()).convertAndSendToUser(username,"/socket/main",alert);
    }

    @Test
    public void notifySendInformation() {
        Information information = new Information();
        information.setKey("test key");
        information.setValue("test value");

        uiService.notify(information);

        verify(simpMessagingTemplate,atLeastOnce()).convertAndSend("/socket/main",information);
        Assert.assertEquals(tempRepository.getInformationList().size(),1);
    }

    @Test(expected = NullNotificationException.class)
    public void notifySendNull() {
        uiService.notify(null);
    }

}