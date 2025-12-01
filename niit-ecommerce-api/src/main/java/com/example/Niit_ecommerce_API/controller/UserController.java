package com.example.Niit_ecommerce_API.controller;

import com.example.Niit_ecommerce_API.model.entity.User;
import com.example.Niit_ecommerce_API.model.request.CreateUser;
import com.example.Niit_ecommerce_API.model.request.UpdateUser;
import com.example.Niit_ecommerce_API.service.UserService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

//localhost:8080/api/v1/users
@RestController
@RequestMapping(value = "/api/v1/users")
public class UserController {

    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping
    public User createUser(@RequestBody CreateUser request){
        User user = userService.create(request);

        return user;
    }

    @GetMapping
    public List<User> getAllUsers() {
        List<User> users =userService.getAllUsers();

        return users;
    }

    @GetMapping(value = "/{userId}")
    public User getUser(@PathVariable("userId") int userId) {
       User user =  userService.getUser(userId);

       return user;
    }


    @PatchMapping(value = "/{userId}")
    public User updateUser(@PathVariable("userId") int userId, @RequestBody UpdateUser updateUser) {
        User user =  userService.update(userId, updateUser);

        return user;
    }


}
