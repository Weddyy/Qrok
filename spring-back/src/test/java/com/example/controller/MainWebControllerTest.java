package com.example.controller;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.runners.MockitoJUnitRunner;

import static org.junit.Assert.*;

/**
 * Created by weddy on 30.03.17.
 */
@RunWith(MockitoJUnitRunner.class)
public class MainWebControllerTest {

    @InjectMocks
    MainWebController mainWebController;

    @Test
    public void index() throws Exception {
        Assert.assertEquals(mainWebController.index(),"forward:/index.html");
    }

}