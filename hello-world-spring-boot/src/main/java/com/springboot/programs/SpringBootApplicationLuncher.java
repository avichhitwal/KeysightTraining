package com.springboot.programs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * This Luncher for the spring boot application.
 */
@SpringBootApplication
public class SpringBootApplicationLuncher {
	public static void main(String[] args) {
		SpringApplication.run(HelloWorldController.class, args);
	}
}
