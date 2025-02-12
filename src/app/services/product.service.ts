import { Injectable } from '@angular/core';
import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Camiseta Negra', price: 25, image: 'https://th.bing.com/th/id/OIP.KBQ4cCGYa5kSpl5GsHVO2QHaJ4?rs=1&pid=ImgDetMain' },
    { id: 2, name: 'Saco para mujer', price: 700, image: 'https://www.elpalaciodehierro.com/on/demandware.static/-/Sites-palacio-master-catalog/default/dwd6990d58/images/39509688/NEGRO/large/39509689_NEGRO_x1.jpg' },
    { id: 3, name: 'pantalon de vestir hombre', price: 250, image: 'https://th.bing.com/th/id/OIP.h5f4okd2rK9ZrYBOE6JYiAAAAA?rs=1&pid=ImgDetMain' },
    { id: 4, name: 'Gafas de sol', price: 560, image: 'https://th.bing.com/th/id/OIP.Nrhpw4ScXEPsG9McdWgwTQHaHa?rs=1&pid=ImgDetMain' },
    { id: 5, name: 'Collar Deluxe', price: 1200, image: 'https://cdn-0.somosmamas.com.ar/wp-content/uploads/2019/03/cadena-cordon-hombre--990x1232.jpg' },
    { id: 6, name: 'Reloj para hombre', price: 4000, image: 'https://th.bing.com/th/id/OIP.RPAXb2BeKLNGsO3JcLhbuwHaIa?rs=1&pid=ImgDetMain  ' },
    { id: 7, name: 'Jeans Azul', price: 400, image: 'https://th.bing.com/th/id/OIP.GKbDVS0grWumDU4BUANodAHaJ3?rs=1&pid=ImgDetMain' },
    { id: 8, name: 'Shoris Blancos para hombre', price: 345, image: 'https://th.bing.com/th/id/OIP.JrBw89nqULpMN02fG7BeHQHaHa?rs=1&pid=ImgDetMain' },
    { id: 9, name: 'Conjunto Deportivo', price: 750, image: 'https://th.bing.com/th/id/OIP.6Tk0cMkZgbNd-sYfQSq5SAAAAA?rs=1&pid=ImgDetMain' }

  ];

  getProducts(): Product[] {
    return this.products;
  }

}
