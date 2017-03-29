package com.example.controller;

import com.example.models.Alert;
import com.example.models.Information;
import com.example.repositorys.TempRepository;
import com.example.services.SocketService;
import com.example.services.UiServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.annotation.SubscribeMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;
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

    @RequestMapping({ "/alert", "/info" })
    public String index() {
        return "forward:/index.html";
    }

    /**
     * On connect chanel
     * @return Information list.
     */
    @SubscribeMapping("/socket/main")
    public Collection<Information> connectToMainChangel()
    {
        return tempRepository.getInformationList().values();
    }

    /**
     * User send alert
     * @param alert new alert
     */
    @MessageMapping("/socket/sendAlert")
    public void sendAlert(Alert alert,Principal principal)
    {
        uiService.notify(alert);
    }

    /**
     * User send new information
     * @param information new information
     */
    @MessageMapping("/socket/sendInformation")
    public void setInformation(Information information)
    {
        uiService.notify(information);
    }
}
