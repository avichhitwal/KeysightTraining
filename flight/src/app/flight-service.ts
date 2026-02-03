import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(){}

  Flights = [
    {
      flightNo: 1,
      src: "A",
      dest: "X",
      deptTime: "9:00",
      status: "On Time"
    },
    {
      flightNo: 2,
      src: "B",
      dest: "Y",
      deptTime: "10:00",
      status: "Delayed"
    },
    {
      flightNo: 3,
      src: "C",
      dest: "Z",
      deptTime: "11:00",
      status: "Cancelled"
    }
  ]
}
