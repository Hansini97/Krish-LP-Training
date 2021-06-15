package com.hansini.rentcloud.vehicleservice.controller;

import com.hansini.rentcloud.commons.model.Vehicle;
import com.hansini.rentcloud.vehicleservice.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/services")
public class VehicleController {


        @Autowired
        VehicleService vehicleService;

        @RequestMapping(value = "/vehicle",method = RequestMethod.POST)
        public Vehicle save(@RequestBody Vehicle vehicle){

            return vehicleService.save(vehicle);

        }
    }


