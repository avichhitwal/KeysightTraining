import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products } from './products/products';
import { ProductDetail } from './product-detail/product-detail';
import { Product } from './product/product';
import { Overview } from './overview/overview';
import { Specs } from './specs/specs';
import { Reviews } from './reviews/reviews';
import { AddFlight } from './add-flight/add-flight';
import { ManagerFlights } from './manager-flights/manager-flights';
import { Home } from './home/home';
import { NotFOund } from './not-found/not-found';

const routes: Routes = [
  {path:'home',component:Home},
  {path:'flights',component: Products},
  {path:'notfound',component: NotFOund},
  {path:'flights/:id',component: ProductDetail},
  // {path:'products/:id',component: ProductDetail},
  {path:'admin/:id',component: Product,
    children : [
      {path:'add-flight',component: AddFlight},
      {path:'manage-flight',component: ManagerFlights},
      // {path:'reviews',component: Reviews},
      {path:'',redirectTo:'/admin/1/add-flight',pathMatch:'full'}
    ]
   },
  {path:'', redirectTo:'/flights', pathMatch:'full'},
  {path:'**', redirectTo:'/notfound', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { Home } from './home/home';
// import { About } from './about/about';
// import { Contact } from './contact/contact';

//   {path:'home',component: Home},
//   {path:'products',component: Products},
//   {path:'products/:id',component: ProductDetail},
//   {path:'about',component: About},
//   {path:'contact',component: Contact},
//   {path:'',redirectTo:'/products', pathMatch: 'full'},
//   {path:'**',redirectTo:'/products', pathMatch: 'full'}
// ];