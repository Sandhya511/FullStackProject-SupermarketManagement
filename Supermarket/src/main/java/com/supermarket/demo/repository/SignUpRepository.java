package com.supermarket.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.demo.model.SignUp;

@Repository
public interface SignUpRepository extends JpaRepository<SignUp,String>{

	SignUp findByusername(String username);

	SignUp findByEmail(String email);

//	SignUp findByEmail(String email);

}
