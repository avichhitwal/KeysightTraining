import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight-service';

@Component({
  selector: 'app-flight-list',
  standalone: false,
  templateUrl: './flight-list.html',
  styleUrl: './flight-list.css',
})

export class FlightList implements OnInit{
  
  flights:any;

  constructor(private demoService: FlightService){}

  ngOnInit(): void {
    this.flights = this.demoService.Flights;
  }

}
  
  // flights : Flight[] = [
  //   {
  //     flightNo: 1,
  //     src: "A",
  //     dest: "X",
  //     deptTime: "9:00",
  //     status: "On Time"
  //   },
  //   {
  //     flightNo: 2,
  //     src: "B",
  //     dest: "Y",
  //     deptTime: "10:00",
  //     status: "Delayed"
  //   },
  //   {
  //     flightNo: 3,
  //     src: "C",
  //     dest: "Z",
  //     deptTime: "11:00",
  //     status: "Cancelled"
  //   }
  // ]
  
// }

// class Flight{
//   flightNo!:number;
//   src!:string;
//   dest!:string;
//   deptTime!:string;
//   status!:string;
// }