package com.sprint.service;

import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprint.beans.Customer;
import com.sprint.beans.Product;
import com.sprint.beans.Order;
import com.sprint.repository.CustomerRepository;
import com.sprint.repository.ProductRepository;
import com.sprint.repository.OrderRepository;

@Transactional
@Service
public class OrderServiceImpl implements OrderService{

	static HashMap<String,Double> data = new HashMap<String,Double>();
	@Autowired
	OrderRepository oRepo;
	
	
	@Override
	public HashMap<String,Double> addOrder(Order order) {
		oRepo.saveAndFlush(order);
		
		return null;
		
	}
	
}
