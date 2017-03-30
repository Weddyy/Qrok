package com.example.controller;

import com.example.models.Alert;
import com.example.models.Information;
import com.example.repositorys.TempRepository;
import com.example.services.SocketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by weddy on 30.03.17.
 * Rest controller for tests !
 */
@RestController
@RequestMapping("/api")
public class MainRestController {

    @Autowired
    SocketService uiService;

    @Autowired
    TempRepository tempRepository;

    /**
     * User send alert ( rest )
     * @param alert new alert
     */
    @RequestMapping(value = "/sendAlert",method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity sendAlert(@RequestBody Alert alert)
    {
        uiService.notify(alert);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * User send new information ( rest )
     * @param information new information
     */
    @RequestMapping(value = "/sendInformation",method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity setInformation(@RequestBody Information information)
    {
        uiService.notify(information);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    /**
     * Get all information ( rest )
     */
    @RequestMapping(value = "/getInformation",method = RequestMethod.GET)
    public ResponseEntity getInformation()
    {
        return new ResponseEntity<>(tempRepository.getInformationList().values(),HttpStatus.OK);
    }

}
