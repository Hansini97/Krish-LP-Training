package com.hansini.rentcloud.rentProcessTask.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;

public class RentProcessTaskRunner implements CommandLineRunner {

    @Autowired
    RentProcessService rentProcessService;

    @Override
    public void run(String... args) throws Exception {

        if(args.length>0){
            System.out.println("task running with arguments");

            if(rentProcessService.validateDL(args[0])){
                System.out.println("valid driving license");
            }else {
                System.out.println("invalid driving license");
            }
        }else {
            System.out.println("task running without arguments");
        }
    }
}
