import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Admin } from './admin/admin';
import { Flight } from './flight/flight';
import { FlightsDetails } from './flights-details/flights-details';
import { AddFlight } from './add-flight/add-flight';
import { ManagerFlights } from './manager-flights/manager-flights';
import { NotFound } from './not-found/not-found';

const routes: Routes = [
  {path:'home',component: Home},
  {path:'admin',component: Admin,
    children: [
      { path: 'add-flight', component: AddFlight },
      { path: 'manage-flights', component: ManagerFlights}
    ]
  },
  {path:'flight/:id',component: FlightsDetails},
  { path: '**', component: NotFound },
  { path: '', redirectTo: 'home',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
