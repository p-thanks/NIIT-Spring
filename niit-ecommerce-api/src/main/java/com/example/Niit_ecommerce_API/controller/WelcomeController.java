package com.example.Niit_ecommerce_API.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class WelcomeController {

    @GetMapping(value = "/welcome")
        public Map<String,String> welcome(){

            return Map.of(
                    "name","Chris",
                    "age","12",
                    "gender","male"
            );
    }
}
