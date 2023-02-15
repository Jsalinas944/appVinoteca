import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path:"inicio",component:HomeComponent},
  {path:"productos",component:ProductosComponent},
  {path:"contactos",component:ContactosComponent},
  {path:"admin", component:AdminComponent},
  {path:"create-producto",component:CreateProductoComponent},
  {path:"**", redirectTo:"inicio", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
