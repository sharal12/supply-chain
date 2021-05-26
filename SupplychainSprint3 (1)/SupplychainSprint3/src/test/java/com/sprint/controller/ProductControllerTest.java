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


import com.sprint.beans.Product;
import com.sprint.repository.ProductRepository;
import com.sprint.service.ProductService;

@RunWith(SpringRunner.class)
@WebMvcTest(ProductController.class)
public class ProductControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	Product product;
	@MockBean
	ProductRepository mRepo;
	
	@MockBean
	ProductService mService;

	@Test
	@DisplayName("Testcase for get request method.")
	public void getAllProduct() throws Exception{
		mockMvc.perform(get("/product/get"))
		.andExpect(status().isOk())
		.andExpect(content().json("[]"));
	}
}