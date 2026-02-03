import { Component } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-add-flight',
  standalone: false,
  templateUrl: './add-flight.html',
  styleUrl: './add-flight.css',
})
export class AddFlight {

  flightId!: number;
  flightName!: string;
  flightPrice!: number;

  constructor(private flightService: ProductService) {}

  addFlight() {
    const newFlight = {
      id: this.flightId,
      name: this.flightName,
      price: this.flightPrice
    };

    // Temporary logic (for assignment demonstration)
    console.log('Flight Added:', newFlight);

    // Clear form
    this.flightId = 0;
    this.flightName = '';
    this.flightPrice = 0;
  }

}
