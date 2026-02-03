import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from './models/flight.model';

@Pipe({
  name: 'flightFilter',
  standalone: false,
})
export class FlightFilterPipe implements PipeTransform {

  transform(flights: Flight[],category:string): Flight[] {
      if(!category || category === 'All') {
        return flights
      }
      return flights.filter(flight => flight.src === category || flight.dest === category)
    }

}
