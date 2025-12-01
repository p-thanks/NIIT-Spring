package com.example.Niit_ecommerce_API.service;

import com.example.Niit_ecommerce_API.model.entity.User;
import com.example.Niit_ecommerce_API.model.request.CreateUser;
import com.example.Niit_ecommerce_API.model.request.UpdateUser;
import com.example.Niit_ecommerce_API.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User create(CreateUser request){
       User newUser = new User();
       newUser.setEmail(request.getEmail());
       newUser.setPassword(request.getPassword());
       newUser.setGender(request.getGender());
       newUser.setFullName(request.getFullName());
       newUser.setPhoneNumber(request.getPhoneNumber());
       newUser.setDateOfBirth(request.getDateOfBirth());

        return userRepository.save(newUser);


    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUser(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public User update(int userId, UpdateUser updateUser) {
        Optional<User> optional = userRepository.findById(userId);

        if (optional.isEmpty()) {
            throw new RuntimeException("User not found!");
        }

        User oldUser = optional.get();

        if (updateUser.getEmail() != null) {
            oldUser.setEmail(updateUser.getEmail());
        }
        if (updateUser.getGender() != null) {
            oldUser.setGender(updateUser.getGender());
        }
        if (updateUser.getPassword() != null) {
            oldUser.setPassword(updateUser.getPassword());
        }
        if (updateUser.getFullName() != null) {
            oldUser.setFullName(updateUser.getFullName());
        }
        if (updateUser.getDateOfBirth() != null) {
            oldUser.setDateOfBirth(updateUser.getDateOfBirth());
        }
        if (updateUser.getPhoneNumber() != null) {
            oldUser.setPhoneNumber(updateUser.getPhoneNumber());
        }

        return userRepository.save(oldUser);
    }
}
