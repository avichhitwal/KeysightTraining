import { Component } from '@angular/core';
import { FlightService } from '../flight-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  standalone: false,
  templateUrl: './flights.html',
  styleUrl: './flights.css',
})
export class Flights {
  flights : any[] = []; 

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }

  goToDetails(id:number){
    this.router.navigate(['/flights',id]);
  }
}
