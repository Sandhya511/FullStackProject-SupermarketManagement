package com.supermarket.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.supermarket.demo.model.Supermarket;
import com.supermarket.demo.service.SuperMarketService;

import io.swagger.v3.oas.annotations.tags.Tag;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SuperMarketController {
	@Autowired
	SuperMarketService smServ;
	
	
	
	//CRUD Operations
	//get post put delete
	
	@Tag(name="Supermarket Details",description="Get All ")
	@GetMapping(value="/smdata")
	public List<Supermarket> getAll()
	{
		List<Supermarket> smList = smServ.getAll() ;
		return smList ;
	}
	
	@Tag(name = "Save Supermarket Details")
	@PostMapping(value="/savedata")
	public Supermarket saveSM(@RequestBody Supermarket s)
	{
		return smServ.saveSM(s) ;
	}
	
	@GetMapping(value = "getproduct/{pId}")
	public Optional<Supermarket> get(@PathVariable int pId)
	{
		return smServ.get(pId);
	}
	
	
	@Tag(name = "Update Supermarket Details")
	@PutMapping(value="/updatedata/{pId}")
	public Supermarket updateSM(@RequestBody Supermarket m,@PathVariable int pId)
	{
		return smServ.updateSM(m,pId) ;
	}
	
	@Tag(name = "Delete Supermarket Details for a give ID")
	@DeleteMapping(value="/deletedata/{id}")
	public void deleteSM(@PathVariable("id")int pId)
	{
		smServ.deleteSM(pId) ;
	}
	
	// sorting and paging
	
	@Tag(name = "Sort Supermarket Details")
	@GetMapping(value="/sortpage/{field}")
	public List<Supermarket> sortMarket(@PathVariable String field)
	{
		return smServ.sortMarket(field) ;
	}
	
	@Tag(name = "Paging Supermarket Details")
	@GetMapping(value="page/{offset}/{size}")
	public List<Supermarket> pagings(@PathVariable("offset") int offset,@PathVariable("size")int size)
	{
		return smServ.pagings(offset,size) ;
	}
	
	@Tag(name = "Sorting and Paging Supermarket Details")
	@GetMapping(value="pageandsort/{offset}/{size}/{field}")
	public List<Supermarket> pagingsort(@PathVariable("offset") int offset,@PathVariable("size") int size,@PathVariable("field")String field)
	{
		return smServ.pagingsort(offset,size,field) ;
	}
	
	// JPA Queries
	
	//http://localhost:8080/fetchprodbyprefix?prefix=b
	
	@Tag(name = "Fetch Products by prefix")
	@GetMapping(value="/fetchprodbyprefix")
	public List<Supermarket> fetchProdByPrefix(@RequestParam String prefix )
	{
		return smServ.fetchProdByPrefix(prefix) ;
	}
	
	//http://localhost:8080/fetchprodbysuffix?suffix=b
	
	@Tag(name = "Fetch Products by suffix")
	@GetMapping(value="/fetchprodbysuffix")
	public List<Supermarket> fetchProdBySuffix(@RequestParam String suffix)
	{
		return smServ.fetchProdBySuffix(suffix) ;
	}
	
	//http://localhost:8080/fetchprodbybrand/{brand}/{name}
	
	@Tag(name = "Fetch Products by brand and name")
	@GetMapping("/fetchprodbybrand/{brand}/{name}")
	public List<Supermarket> getProdByBrand(@PathVariable String brand,@PathVariable String name)
	{
		return smServ.getProdByBrand(brand,name);
	}

	//Native Query
	
	@Tag(name = "Fetch Products by brand")
	@GetMapping("/fetchbybrand")
	public List<Supermarket> fetchByBrand(@RequestParam String brand)
	{
		return smServ.fetchByBrand(brand) ;
	}
	
	// DML Queries
	
	@Tag(name = "Delete Products by name")
	@DeleteMapping("/deletebyname/{name}")
	public String deleteProdByName(@PathVariable  String name)
	{
		int result = smServ.deleteProdByName(name) ;
		if(result>0)
			return "product deleted" ;
		else
			return "problem occured while deleting" ;
		
	}
	
	@Tag(name = "Update Products by brand and name")
	@PutMapping("/updatebyname/{brand}/{name}")
	public String updateProdByName(@PathVariable String brand,@PathVariable String name)
	{
		int res = smServ.updateProdByName(brand,name) ;
		//System.out.println("result="+res);
		if (res>0)
			return "Product updated" ;
		else
			return "Product update failed" ;
	}

	

}
