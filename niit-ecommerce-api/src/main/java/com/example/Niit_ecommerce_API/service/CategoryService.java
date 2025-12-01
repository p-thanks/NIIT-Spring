package com.example.Niit_ecommerce_API.service;

import com.example.Niit_ecommerce_API.model.entity.Category;
import com.example.Niit_ecommerce_API.repository.CategoryRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public Category create(String categoryName) {

     Category existingCategory = categoryRepository.findByName(categoryName);

     if (existingCategory != null){
         throw new RuntimeException("Category already exists");
     }
        Category category = new Category();
        category.setName(categoryName);

        return categoryRepository.save(category);
    }
}
