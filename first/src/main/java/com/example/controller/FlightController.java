package com.example.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.model.Flight;
import com.example.service.FlightService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FlightController {	
	
	@Autowired
	private FlightService flightService; // DI
	
	@PostMapping(path="/add/flight")
	public Flight addFlight(@RequestBody Flight flight) {
		return flightService.addFlight(flight);
	}
	
	@GetMapping(path="/getAll")
	public List<Flight> getAllFlights() {
		return flightService.getAllFlights();
	}
	
	@GetMapping(path="/{id}")
	public Flight getById(@PathVariable Long id) {
		return flightService.getFlightById(id);
	}
	
	@GetMapping("/test")
	public String test() {
	    return "OK";
	}
	
	@PutMapping("/{id}")
	public Flight updateFlight(@PathVariable Long id, @RequestBody Flight flight) {
		return flightService.updateFlight(id, flight);
	}

	@DeleteMapping("/{id}")
	public String deleteFlight(@PathVariable Long id) {
		flightService.deleteFlight(id);
		return "deleted";
	}
}
