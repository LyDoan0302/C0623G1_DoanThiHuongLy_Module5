package com.example.testbackend.service;

import com.example.testbackend.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> findAll();

}
