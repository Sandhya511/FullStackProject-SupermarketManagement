package com.supermarket.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supermarket.demo.model.Delivery;
import com.supermarket.demo.repository.DeliveryRepository;

@Service
public class DeliveryService {
	@Autowired
	DeliveryRepository dRep ;
	public List<Delivery> fetchAllMarket()
	{
		return dRep.findAll() ;
	}
	public Delivery saveMarket(Delivery d)
	{
		return dRep.save(d) ;
	}
	
	

}
