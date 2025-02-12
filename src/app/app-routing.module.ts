import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriaMujerComponent } from './pages/categoria-mujer/categoria-mujer.component';
import { CategoriaHombreComponent } from './pages/categoria-hombre/categoria-hombre.component';
import { CategoriaNinosComponent } from './pages/categoria-ninos/categoria-ninos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'productos', component: ProductosComponent },
  { path: 'categoriaMujer', component: CategoriaMujerComponent },
  { path: 'categoriaHombre', component: CategoriaHombreComponent },
  { path: 'categoriaNinos', component: CategoriaNinosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent }, // Página de productos
  { path: '**', redirectTo: '' } // Redirección a inicio si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
