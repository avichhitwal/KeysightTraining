import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { HttpClientModule } from '@angular/common/http';
import { ProductCategoryPipe } from './product-category-pipe';
import { FormsModule } from '@angular/forms';
import { ProductSortPipe } from './product-sort-pipe';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { FlightFilterPipe } from './flight-filter-pipe';
import { FlightSortPipe } from './flight-sort-pipe';

@NgModule({
  declarations: [
    App,
    ProductCategoryPipe,
    ProductSortPipe,
    ProductList,
    ProductDetail,
    FlightFilterPipe,
    FlightSortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [ProductList]
})
export class AppModule { }
