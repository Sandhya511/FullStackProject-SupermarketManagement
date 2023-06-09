package com.supermarket.demo.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Manager {
	    @Id
	    @GeneratedValue
	    private Long id;
	  	private String name;
	    private String email;
	    private String password;
	    @OneToOne(cascade = CascadeType.ALL)
	    @JoinColumn(name = "address")
	 	private Store store;
	    public Store getStore() {
			return store;
		}
		public void setStore(Store store) {
			this.store = store;
		}
		public Long getId() {
		return id;
	    }
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		@Override
		public String toString() {
			return "Manager [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", store="
					+ store + "]";
		}
		
	    

}
