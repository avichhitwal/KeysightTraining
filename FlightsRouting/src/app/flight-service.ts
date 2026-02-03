import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {

  private flights = [
    {id:1, name:'A', 'price': 40000},
    {id:2, name:'B', 'price': 3000},
    {id:3, name:'C', 'price': 1000},
  ];
 
  getFlights(){
   return this.flights;
  }
 
  getFlightById(id:number){
    return this.flights.find(f => f.id === id)
  }
 
  constructor() { }
  
}
