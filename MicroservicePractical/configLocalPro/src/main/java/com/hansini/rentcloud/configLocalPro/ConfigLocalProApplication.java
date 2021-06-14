package com.hansini.rentcloud.configLocalPro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigLocalProApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigLocalProApplication.class, args);
	}

}
