package com.supermarket.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.demo.model.Delivery;

@Repository
public interface DeliveryRepository extends JpaRepository<Delivery,Integer>{

}
