package com.example.controller;

import com.example.models.Alert;
import com.example.models.Information;
import com.example.repositorys.TempRepository;
import com.example.services.SocketService;
import com.example.services.UiServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Mockito.atLeastOnce;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * Created by weddy on 30.03.17.
 */
@RunWith(MockitoJUnitRunner.class)
public class MainRestControllerTest {

    @Mock
    private TempRepository tempRepository;

    @Mock
    private SocketService uiService;

    @InjectMocks
    private MainRestController mainRestController;


    @Before
    public void setUp() throws Exception {
        Map<String,Information> map = new HashMap<>();
        map.put("test1",new Information());
        map.put("test2",new Information());
        when(tempRepository.getInformationList()).thenReturn(map);
    }

    @Test
    public void connectToMainChangel() throws Exception {

        Object obj = mainRestController.getInformation().getBody();
        Assert.assertTrue(obj instanceof Collection);
        Collection<Information> info = (Collection<Information>)obj;
        Assert.assertEquals(info.size(),2);

        verify(tempRepository,atLeastOnce()).getInformationList();
    }

    @Test
    public void sendAlert() throws Exception {
        mainRestController.sendAlert(new Alert());
        verify(uiService,atLeastOnce()).notify(anyObject());
    }

    @Test
    public void setInformation() throws Exception {
        mainRestController.setInformation(new Information());
        verify(uiService,atLeastOnce()).notify(anyObject());
    }

}