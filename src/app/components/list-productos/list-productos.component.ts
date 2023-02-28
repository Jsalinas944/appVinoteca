import { Component , OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  productos:any[]=[];

  constructor(private _productoService:ProductoService, private toastr: ToastrService){

  }


  ngOnInit():void{
    this.getProductos();
  }

  getProductos(){
    this._productoService.getProductos().subscribe(data =>{
      this.productos = [];
      data.forEach((element:any) => {
        this.productos.push({
          //crea un objeto con el id y toda la informacion de ese objeto
          id : element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.productos);
    })
  }

  eliminarProducto(id:any){
    this._productoService.eliminarProducto(id).then(()=>{
      this.toastr.error("Producto eliminado con exito","Registro eliminado");
    }).catch(error =>{
      console.log(error);
    })
  }


}
