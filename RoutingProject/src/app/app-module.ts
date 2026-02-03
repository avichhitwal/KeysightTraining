import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';
import { Product } from './product/product';
import { Overview } from './overview/overview';
import { Specs } from './specs/specs';
import { Reviews } from './reviews/reviews';
import { AddFlight } from './add-flight/add-flight';
import { ManagerFlights } from './manager-flights/manager-flights';
import { NotFOund } from './not-found/not-found';

@NgModule({
  declarations: [
    App,
    Home,
    About,
    Contact,
    Products,
    ProductDetail,
    Product,
    Overview,
    Specs,
    Reviews,
    AddFlight,
    ManagerFlights,
    NotFOund
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
