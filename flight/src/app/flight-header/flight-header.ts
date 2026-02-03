import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-header',
  standalone: false,
  templateUrl: './flight-header.html',
  styleUrl: './flight-header.css',
})
export class FlightHeader {

  mainHeading:string="Flight Management System"
  ntl:string="SkyWays Airlines - Fly Beyond Limits"

}
