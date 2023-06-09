package com.supermarket.demo.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supermarket.demo.model.SignUp;
import com.supermarket.demo.repository.SignUpRepository;

@Service
public class SignUpService {
	@Autowired
	SignUpRepository suRep ;

	public SignUp save(SignUp s) {
		// TODO Auto-generated method stub
		return suRep.save(s);
	}

	public String checkLogin(String username, String password) {
		SignUp u = suRep.findByusername(username);
		if(u==null)
		{
			return "No user found" ;
		}
		else
		{
			if(u.getPassword().equals(password))
			{
				return "Login Successful" ;
			}
			else
			{
				return "Login Failed";
			}
		}
	}

	


	public SignUp update(SignUp s) {
		// TODO Auto-generated method stub
		return suRep.save(s);
	}

	public String forgetData(String username, String password) {
		SignUp user = suRep.findByusername(username);
		if(user==null)
		{
			return "NO User Found\nPlease Try Again!!!";
		}
		else
		{
			if(user.getUsername().equals(username))
			{
				user.setPassword(password);
				suRep.save(user);
				return "Password Changed Successfully";
			}
			else
			{
				return "Login Failed" ;
			}
		}
		
	}
	

}
