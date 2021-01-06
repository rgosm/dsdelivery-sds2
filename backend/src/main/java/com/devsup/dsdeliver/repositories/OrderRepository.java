package com.devsup.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsup.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
