package com.supermarket.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Supermarket {
	@Id
	private int pId ;
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getConsumer() {
		return consumer;
	}
	public void setConsumer(String consumer) {
		this.consumer = consumer;
	}
	public String getDiscount() {
		return discount;
	}
	public void setDiscount(String discount) {
		this.discount = discount;
	}
	public int getMrp() {
		return mrp;
	}
	public void setMrp(int mrp) {
		this.mrp = mrp;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getShopId() {
		return shopId;
	}
	public void setShopId(int shopId) {
		this.shopId = shopId;
	}
	private int cId ;
	private String name ;
	private String brand ;
	private String category ;
	private String consumer ;
	private String discount ;
	private int mrp ;
	private int price ;
	private int quantity ;
	private String date ;
	private int shopId ;
	
	

}
