import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-service';

@Component({
  selector: 'app-flights-details',
  standalone: false,
  templateUrl: './flights-details.html',
  styleUrl: './flights-details.css',
})
export class FlightsDetails implements OnInit{

  flight: any; 

  constructor(private route: ActivatedRoute, private flightService: FlightService) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.flight = this.flightService.getFlightById(id);
  }

}
