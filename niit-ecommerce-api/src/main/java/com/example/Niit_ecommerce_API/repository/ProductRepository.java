package com.example.Niit_ecommerce_API.repository;

import com.example.Niit_ecommerce_API.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    


}
