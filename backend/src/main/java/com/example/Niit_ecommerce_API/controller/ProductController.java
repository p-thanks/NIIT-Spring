package com.example.Niit_ecommerce_API.controller;

import com.example.Niit_ecommerce_API.model.entity.Product;
import com.example.Niit_ecommerce_API.model.request.CreateProduct;
import com.example.Niit_ecommerce_API.service.ProductService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/products")
public class ProductController {

    private ProductService productService;
    private ObjectMapper objectMapper;

    public ProductController(ProductService productService, ObjectMapper objectMapper) {
        this.productService = productService;
        this.objectMapper = objectMapper;
    }

    @PostMapping
    public ResponseEntity<?> createProduct(
            @RequestParam ("data") String request,
            @RequestParam("file") MultipartFile multipartFile
            ) throws JsonProcessingException {
        CreateProduct createProduct = objectMapper.readValue(request, CreateProduct.class);

        Product product = productService.create(createProduct, multipartFile);

        return ResponseEntity.ok(product);
    }

    @GetMapping
    public ResponseEntity<?> getAllProducts(
            @RequestParam(value = "page") int page,
            @RequestParam(value = "size") int size
    ) {
        List<Product> products = productService.getAllProducts(page, size);

        return ResponseEntity.ok(products);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getProductById(@PathVariable("id") int id) {
        Product product = productService.getById(id);

        return ResponseEntity.ok(product);
    }
}
