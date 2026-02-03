import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TaskItem } from './task-item/task-item';
import { FormsModule } from '@angular/forms';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { FlightHeader } from './flight-header/flight-header';
import { FlightFooter } from './flight-footer/flight-footer';
import { FligthList } from './fligth-list/fligth-list';


@NgModule({
  declarations: [
    App,
    Footer,
    Header,
    FlightHeader,
    FlightFooter,
    FligthList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
