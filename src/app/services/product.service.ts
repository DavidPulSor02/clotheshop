import { Injectable } from '@angular/core';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Camiseta Negra', price: 25, image: 'assets/camiseta.jpg' },
    { id: 2, name: 'Jeans Azul', price: 40, image: 'assets/jeans.jpg' }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
