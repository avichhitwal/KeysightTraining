import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
 
  productsNew = [
    {
      id:1,
      name:'Laptop',
      description: 'Laptop leovno',
      price: 34000,
      category:'Electronics'
    },
    {
      id:2,
      name:'SmartPhone',
      description: 'megapixel smartphone',
      price: 8000,
      category:'Electronics'
    },
    {
      id:3,
      name:'LED TV hd',
      description: 'Samsung LED TV',
      price: 10000,
      category:'Electronics'
    }
  ]
 
  selectedProduct = this.productsNew[0];  //default product
 
  selectProduct(product: any){
    this.selectedProduct = product
  }

  //implementing the cart feature below to recieve the value from Child

  cart : any[] = [];
  handleAddToCart(product : any){ //product is coming from Child component
    this.cart.push(product);
    alert(`${product.name} added to cart`);
  }
 
}