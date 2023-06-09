package com.supermarket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supermarket.demo.model.Delivery;
import com.supermarket.demo.service.DeliveryService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class DeliveryController {
	@Autowired
	DeliveryService dServ ;
	
	@Tag(name = "Fetch all the Markets")
	@GetMapping("/fetchallmarket")
	public List<Delivery>fetchAllMarket()
	{
		return dServ.fetchAllMarket();
	}
	
	@Tag(name = "Save Market")
	@PostMapping("/saveMarket")
	public Delivery saveMarket(Delivery d)
	{
		return dServ.saveMarket(d) ;
	}

}
