package com.hansini.rentcloud.profileservice.service;

import com.hansini.rentcloud.commons.model.Customer;
import com.hansini.rentcloud.profileservice.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerServiceImpl implements CustomerService{

   @Autowired
    CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }
}
