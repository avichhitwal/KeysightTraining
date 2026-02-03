import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();

  onaddToCart() {
    this.addToCart.emit(this.product)
  }

}
