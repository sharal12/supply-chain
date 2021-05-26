package com.sprint.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.sprint.beans.Order;
import com.sprint.repository.CustomerRepository;
import com.sprint.repository.OrderRepository;
import com.sprint.service.CustomerService;
import com.sprint.service.OrderService;

@RunWith(SpringRunner.class)
@WebMvcTest(OrderController.class)
public class OrderControllerTest {
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	Order order;
	@MockBean
	CustomerRepository cRepo;
	
	@MockBean
	OrderRepository oRepo;
	
	@MockBean
	CustomerService cService;
	@MockBean
	OrderService oService;

	@Test
	@DisplayName("Testcase for get request method.")
	public void getAllOrders() throws Exception{
		mockMvc.perform(get("http://localhost:8080/restaurant/ViewOrders"))
		.andExpect(status().isOk())
		.andExpect(content().json("[]"));
	
	}
}