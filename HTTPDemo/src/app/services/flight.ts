import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  
  private apiUrl = 'http://localhost:3000/flights';

  constructor(private http: HttpClient) {}

  getFlights() : Observable<Flight[]>{
    return this.http.get<Flight[]>(this.apiUrl);
  }

  addFlight(flight: Flight) : Observable<Flight>{
    return this.http.post<Flight>(this.apiUrl,flight);
  }
  
  updateFlight(flight: Flight) : Observable<Flight>{
    const url = `${this.apiUrl}/${flight.fid}`;
    return this.http.put<Flight>(url,flight);
  }

  deleteFlight(id:string) : Observable<any>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
