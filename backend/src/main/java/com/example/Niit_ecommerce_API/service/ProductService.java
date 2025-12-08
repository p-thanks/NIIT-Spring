package com.example.Niit_ecommerce_API.service;

import com.example.Niit_ecommerce_API.model.entity.Product;
import com.example.Niit_ecommerce_API.model.request.CreateProduct;
import com.example.Niit_ecommerce_API.repository.ProductRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public Product create(CreateProduct request, MultipartFile multipartFile) {

        Product product = new Product();
        product.setName(request.getName());
        product.setDiscount(request.getDiscount());
        product.setPrice(request.getPrice());
        product.setDescription(request.getDescription());
        product.setQuantity(request.getQuantity());

        try{
            String base64String = Base64.getEncoder().encodeToString(multipartFile.getBytes());
            String imageString = "data:image/png;base64," + base64String;
            product.setImage(imageString);
        }
        catch (Exception ex){
            System.out.println("Error while saving image...");
        }

return productRepository.save(product);

    }

    public List<Product> getAllProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        Page<Product> productPage = productRepository.findAll(pageable);

        return productPage.getContent();
    }

    public Product getById(int id) {
        Optional<Product> optional = productRepository.findById(id);

        if (optional.isEmpty()) {
            throw new RuntimeException("Product not found!");
        }

        return optional.get();
    }
}
