import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateProductoComponent } from './components/create-producto/create-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    CreateProductoComponent,
    ListProductosComponent,
    HomeComponent,
    ContactosComponent,
    ProductosComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
