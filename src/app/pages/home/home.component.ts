import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {
  // Definir la propiedad productos como un array de objetos
  productos = [
    {
      nombre: 'Camiseta Negra',
      precio: 250.00,
      imagen: 'https://th.bing.com/th/id/OIP.KBQ4cCGYa5kSpl5GsHVO2QHaJ4?rs=1&pid=ImgDetMain'
    },
    {
      nombre: 'Jeans Azul',
      precio: 450.00,
      imagen: 'https://th.bing.com/th/id/OIP.GKbDVS0grWumDU4BUANodAHaJ3?rs=1&pid=ImgDetMain'
    },
    {
      nombre: 'Hoodie Urbana',
      precio: 600.00,
      imagen: 'https://cdna.lystit.com/1040/1300/n/photos/asos/6838f7f0/asos-black-Oversized-Hoodie-With-Skull-Back-Print-In-Black.jpeg'
    }
  ];
}
