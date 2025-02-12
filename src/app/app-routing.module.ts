import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página de inicio
  { path: 'productos', component: ProductosComponent },
  { path: 'login', component: LoginComponent }, // Página de productos
  { path: '**', redirectTo: '' } // Redirección a inicio si la ruta no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
