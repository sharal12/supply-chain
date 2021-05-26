package com.sprint.service;

import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprint.beans.Customer;
import com.sprint.beans.Order;
import com.sprint.repository.CustomerRepository;
import com.sprint.repository.ProductRepository;
import com.sprint.repository.OrderRepository;


@Transactional
@Service
public class ProductServiceImpl implements ProductService{

	HashMap<String,Double> selectedProduct = new HashMap<String,Double>();
	@Autowired
	ProductRepository mRepo;
	
	
	@Autowired
	OrderRepository oRepo;
	
	@Autowired
	CustomerRepository cRepo;

	@Override
	public List<String> getProduct() {
		List<String> product = mRepo.getProduct();
		return product;
	}



}
