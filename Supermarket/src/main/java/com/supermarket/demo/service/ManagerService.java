package com.supermarket.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supermarket.demo.model.Manager;
import com.supermarket.demo.repository.ManagerRepository;

@Service
public class ManagerService {
	@Autowired
	ManagerRepository mRep ;
	public List<Manager> fetchAllManager()
	{
		return mRep.findAll() ;
	}
	public Manager saveManager(Manager m)
	{
		return mRep.save(m) ;
	}

}
