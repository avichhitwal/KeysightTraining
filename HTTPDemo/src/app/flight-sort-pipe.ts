import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from './models/flight.model';

@Pipe({
  name: 'flightSort',
  standalone: false,
})
export class FlightSortPipe implements PipeTransform {
 
  transform(flights:Flight[], sortBy:string): Flight[] {
   
    if(!flights || !sortBy)
      return flights;
 
    const sortedFlights = [...flights];
 
    switch(sortBy) {
      case 'priceAsc':
           return sortedFlights.sort((a,b) => a.price -b.price);
      case 'priceDesc':
           return sortedFlights.sort((a,b) => b.price -a.price);
      case 'dtAsc':
           return sortedFlights.sort((a,b) => a.dept.localeCompare(b.dept));
      case 'dtDesc':
           return sortedFlights.sort((a,b) => b.dept.localeCompare(a.dept));
      default:
           return flights;
          }
  }
 
}
