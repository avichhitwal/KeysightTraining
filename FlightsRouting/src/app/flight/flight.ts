import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight-service';

@Component({
  selector: 'app-flight',
  standalone: false,
  templateUrl: './flight.html',
  styleUrl: './flight.css',
})
export class Flight {

  flights : any[] = []; 

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit(): void {
    this.flights = this.flightService.getFlights();
  }

  goToDetails(id:number){
    this.router.navigate(['/flights',id]);
  }
}
