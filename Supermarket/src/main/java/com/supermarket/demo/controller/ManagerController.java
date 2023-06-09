package com.supermarket.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supermarket.demo.model.Manager;
import com.supermarket.demo.service.ManagerService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
public class ManagerController {
	@Autowired
	ManagerService mServ ;
	@Tag(name = "Fetch all Manager")
	@GetMapping("/fetchallmanager")
	public List<Manager> fetchAllManager()
	{
		return mServ.fetchAllManager() ;
	}
	
	@Tag(name = "Save Manager")
	@PostMapping("/savemanager")
	public Manager saveManager(Manager m)
	{
		return mServ.saveManager(m) ;
	}

}
