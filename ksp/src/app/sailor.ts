import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Sailor {
  constructor() {}

  Sailors =[
    {
      id:11,
      sname:"Sailor1",
      rating:7
    },
    {
      id:22,
      sname:"Sailor2",
      rating:9
    },
    {
      id:33,
      sname:"Sailor3",
      rating:6
    }
  ]

  getData() {
    return "list of sailors"
  }
}
