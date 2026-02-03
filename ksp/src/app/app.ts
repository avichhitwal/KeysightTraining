import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { Sailor } from './sailor';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.css']
})
export class App implements OnInit{
  title = 'KeysightProject';
 
  // products: Product[] | undefined;
  // productService;

  newData:any;
  message:string = ""
 
  constructor(private demoService: Sailor){

    // this.productService = new ProductService();
  }
  ngOnInit(): void {
    this.newData = this.demoService.Sailors; // pulling Sailors Array from the service class
    this.message = this.demoService.getData(); // calling the method of sailor service class
  }
 
  // getProducts(){
    // this.products =  this.productService.getProducts()
  // }
}