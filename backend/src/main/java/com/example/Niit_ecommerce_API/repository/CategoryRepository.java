package com.example.Niit_ecommerce_API.repository;

import com.example.Niit_ecommerce_API.model.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    Category findByName(String name);
}
