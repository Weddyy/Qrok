package com.example.controller;

import com.example.models.Alert;
import com.example.models.Information;
import com.example.repositorys.TempRepository;
import com.example.services.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;

import java.util.Collection;

/**
 * Main socket controller
 */
@Controller
public class MainSocketController {

    @Autowired
    TempRepository tempRepository;

    @Autowired
    SocketService uiService;

    /**
     * On connect chanel
     * @return Information list.
     */
    @SubscribeMapping("/socket/getUsers")
    public Collection<Information> connectToUsrs()
    {
        return tempRepository.getInformationList().values();
    }

    /**
     * User send alert
     * @param alert new alert
     */
    @MessageMapping("/socket/sendAlert")
    public void getAllUsers(Alert alert)
    {
        uiService.notify(alert);
    }

    /**
     * User send new information
     * @param information new information
     */
    @MessageMapping("/socket/sendAlert")
    public void getAllUsers(Information information)
    {
        uiService.notify(information);
    }
}
