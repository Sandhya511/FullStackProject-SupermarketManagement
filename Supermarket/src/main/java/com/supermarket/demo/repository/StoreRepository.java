package com.supermarket.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.supermarket.demo.model.Store;

public interface StoreRepository extends JpaRepository<Store,Long>{

}
