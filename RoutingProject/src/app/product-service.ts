import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  private products = [
    {id:1, name:'Flight1', 'price': 4000},
    {id:2, name:'Flight2', 'price': 3000},
    {id:3, name:'Flight3', 'price': 1000},
  ];
 
  getProducts(){
   return this.products;
  }
 
  getProductById(id:number){
    return this.products.find(p => p.id === id)
  }
 
  constructor() { }
}
