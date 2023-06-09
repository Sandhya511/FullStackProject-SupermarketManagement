package com.supermarket.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.demo.model.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration,Integer>{

}
