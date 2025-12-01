package com.example.Niit_ecommerce_API.repository;

import com.example.Niit_ecommerce_API.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
