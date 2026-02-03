import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Flights } from './flight/flights';
import { Admin } from './admin/admin';
import { FlightsDetails } from './flights-details/flights-details';
import { AddFlight } from './add-flight/add-flight';
import { ManagerFlights } from './manager-flights/manager-flights';
import { NotFound } from './not-found/not-found';
import { Flight } from './flight/flight';

@NgModule({
  declarations: [
    App,
    Home,
    Flights,
    Admin,
    FlightsDetails,
    AddFlight,
    ManagerFlights,
    NotFound,
    Flight
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
