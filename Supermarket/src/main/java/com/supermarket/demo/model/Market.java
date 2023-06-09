package com.supermarket.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Market {
	@Id
	private int id ;
	private int shopId ;
	private String name ;
	private String city ;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getShopId() {
		return shopId;
	}
	public void setShopId(int shopId) {
		this.shopId = shopId;
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
	@Override
	public String toString() {
		return String.format("Market [id=%s, shopId=%s, name=%s, city=%s]", id, shopId, name, city);
	}
	
	

}
