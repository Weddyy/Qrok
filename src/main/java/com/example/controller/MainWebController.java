package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by weddy on 30.03.17.
 */
@Controller
public class MainWebController {

    @RequestMapping({ "/alert", "/info" })
    public String index() {
        return "forward:/index.html";
    }
}
