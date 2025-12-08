package com.example.Niit_ecommerce_API.controller;

import com.example.Niit_ecommerce_API.model.entity.Category;
import com.example.Niit_ecommerce_API.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/categories")
public class CategoryController {

    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService){
        this.categoryService = categoryService;
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody String categoryName){
       Category category = categoryService.create(categoryName);

       return  ResponseEntity.ok(category);
    }
}


