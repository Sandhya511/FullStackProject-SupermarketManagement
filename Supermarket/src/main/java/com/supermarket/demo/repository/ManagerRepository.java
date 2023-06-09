package com.supermarket.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.demo.model.Manager;




@Repository
public interface ManagerRepository extends JpaRepository<Manager,Long>{

}
