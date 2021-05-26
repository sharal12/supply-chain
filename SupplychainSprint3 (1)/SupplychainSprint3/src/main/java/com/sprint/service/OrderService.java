package com.sprint.service;

import java.util.HashMap;

import com.sprint.beans.Product;
import com.sprint.beans.Order;

public interface OrderService {

	public HashMap<String,Double> addOrder(Order order);
	
	
}