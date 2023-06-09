package com.supermarket.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.supermarket.demo.model.Market;

@Repository
public interface MarketRepository extends JpaRepository<Market,Integer>{

}
