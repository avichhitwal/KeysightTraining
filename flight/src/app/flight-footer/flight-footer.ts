import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-footer',
  standalone: false,
  templateUrl: './flight-footer.html',
  styleUrl: './flight-footer.css',
})
export class FlightFooter {
  message:string="Copyright 2026 Flight Management System"
}
