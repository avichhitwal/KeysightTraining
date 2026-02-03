import { Component, signal } from '@angular/core';
import { ProductService } from './services/product';
import { Product } from './models/product.model';
import { Flight } from './models/flight.model';
import { FlightService } from './services/flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {
 
  selectedCategory = 'All';
  sortOption = '';
  flights: Flight[] = []; 
 
  constructor(private flightService: FlightService){} 

  getAllFlights(){
    this.flightService.getFlights().subscribe(data =>{
      console.log('GET:', data);
      this.flights = data; 
    })
  }
 
  addFlight(){
    const newFlight:Flight = { 
      fid:1,
      fno:11,
      aname:'A',
      src:'a',
      dest:'x',
      dept:'9:00',
      price:1000,
      status:'On Time'
    }
    this.flightService.addFlight(newFlight).subscribe(data =>{
      console.log('POST:', data);
      this.getAllFlights();
    })
  }
 
  updateFlight(){
     const updatedFlight: Flight = { 
      fid:1,
      fno:11,
      aname:'A',
      src:'a',
      dest:'x',
      dept:'9:00',
      price:5000,
      status:'Delayed',
    }
    this.flightService.updateFlight(updatedFlight).subscribe(data =>{
      console.log('PUT:', data);
      this.getAllFlights();
    })
  }
 
  deleteFlight(){
  this.flightService.deleteFlight("f660").subscribe(() =>{
    console.log('DELETE: Product successfull');
    this.getAllFlights();
  })
  }
 
 
}









// export class App {
 
//   selectedCategory = 'All';
//   sortOption = '';
//   products: Product[] = [];  // empty array going to storethe product coming from the service class
 
//   constructor(private productService: ProductService){} // injecting service into the component
 
//   // GET: calling the service getProduct() method
//   getAllProducts(){
//     this.productService.getProducts().subscribe(data =>{
//       console.log('GET:', data);
//       this.products = data; //storing the data coming from service into the array declared above
//     })
//   }
 
//   // POST: calling the service addProduct() method
//   addProduct(){
//     const newProduct:Product = { // this newProduct will be added to the server
//        id:0,
//        name:' Smart Watch',
//        description : 'Wearable Device',
//        price: 250,
//        category:'Electronics'
//     }
//     this.productService.addProduct(newProduct).subscribe(data =>{
//       console.log('POST:', data);
//       this.getAllProducts();
//     })
//   }
 
//   //PUT: callign the service updateProduct() method
//   updateProduct(){
//      const updatedProduct:Product = { // this newProduct will be added to the server
//        id:1,
//        name:' Smart Watch X series',
//        description : 'Wearable Device with latest AI tech',
//        price: 950,
//        category:'Electronics'
//     }
//     this.productService.updateProduct(updatedProduct).subscribe(data =>{
//       console.log('PUT:', data);
//       this.getAllProducts();
//     })
//   }
 
//   // DELETE: calling the service deelteProduct() method
//   deleteProduct(){
//   this.productService.deleteProduct(2).subscribe(() =>{
//     console.log('DELETE: Product successfull');
//     this.getAllProducts();
//   })
//   }
 
 
// }
// export class App {

//   products: Product[] = []; //empty array that will store the products coming from the service

//   protected readonly title = signal('HTTPDemo');

//   constructor(private productService: ProductService) {} // injecting service into the component

//   //GET: calling the service getProduct() method
//   getAllProducts(){
//     this.productService.getProducts().subscribe(data =>{
//       console.log('GET:',data);
//       this.products = data;
//     })
//   }

//   //POST: calling the service addProduct() method
//   addProduct() {
//     const newProduct: Product = {
//       id: 0,
//       name: 'watch',
//       description: 'device',
//       price: 250,
//       category: 'Electronics'
//     }
//     this.productService.addProduct(newProduct).subscribe(data =>{
//       console.log('POST:',data);
//       this.getAllProducts();
//     })
//   }

//   //PUT: calling the service updateProduct() method
//   updateProduct() {
//     const updatedProduct: Product = {
//       id: 0,
//       name: 'new watch',
//       description: 'new device',
//       price: 300,
//       category: 'Electronics'
//     }
//     this.productService.updateProduct(updatedProduct).subscribe(data =>{
//       console.log('PUT:',data);
//       this.getAllProducts();
//     })
//   }

//   //DELETE: calling the service deleteProduct() method
//   deleteProduct() {
//     const id = 0;
//     this.productService.deleteProduct(id).subscribe(() =>{
//       console.log('DELETE:',id);
//       this.getAllProducts();
//     })
//   }

// }
