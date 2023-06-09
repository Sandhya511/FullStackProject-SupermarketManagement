package com.supermarket.demo.controller;

//import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.supermarket.demo.model.SignUp;
import com.supermarket.demo.service.SignUpService;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class SignUpController {
	@Autowired
	SignUpService suServ;
//	@GetMapping("/getspd")
//	public List<SignUp> get()
//	{
//		List<SignUp> hkj = suServ.get();
//		return hkj ;
//	}
	@PostMapping("/rpost")
	public SignUp save(@RequestBody SignUp s)
	{
		return suServ.save(s) ;
	}
	
	@PostMapping("/logging")
	public String login(@RequestBody Map<String,String> loginData)
	{
		String username = loginData.get("username") ;
		String password = loginData.get("password") ;
		String result = suServ.checkLogin(username,password);
		return result ;
	}
	
//	@PutMapping("/forgetPassword")
//	public SignUp update(@RequestBody SignUp s)
//	{
//		return suServ.update(s);
////		SignUp existingUser = suServ.fi
//	}
	@PutMapping("/forgetpassword")
	public String updateRecords (@RequestBody Map<String,String> forgetDataMap) {
		String username = forgetDataMap.get("username");
		String password = forgetDataMap.get("password");
		String result = suServ.forgetData(username, password);
		return result;
	}
	

}
