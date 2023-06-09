package com.supermarket.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Registration
{
	@Id
	private int userId ;
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public int getPassword() {
		return password;
	}
	public void setPassword(int password) {
		this.password = password;
	}
	public int getReEnterPassword() {
		return reEnterPassword;
	}
	public void setReEnterPassword(int reEnterPassword) {
		this.reEnterPassword = reEnterPassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getResidence() {
		return residence;
	}
	public void setResidence(String residence) {
		this.residence = residence;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	private String firstName ;
	private String lastName ;
	private int password ;
	private int reEnterPassword ;
	private String email ;
	private int phoneNumber ;
	private String residence ;
	private String gender ;
	private int age ;
	

}
