package com.supermarket.demo.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class Delivery {
	@Id
	private int id ;
	private String name ;
	private String city ;
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="del_id")
	private List<Market> dInfo ;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public List<Market> getdInfo() {
		return dInfo;
	}
	public void setdInfo(List<Market> dInfo) {
		this.dInfo = dInfo;
	}
	
	
	

}
