import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FlightHeader } from './flight-header/flight-header';
import { FlightFooter } from './flight-footer/flight-footer';
import { FlightList } from './flight-list/flight-list';

@NgModule({
  declarations: [
    App,
    FlightHeader,
    FlightFooter,
    FlightList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
