import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit{

  products : any[] = []; 

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  goToDetails(id:number){
    this.router.navigate(['/flights',id]);
  }
}
