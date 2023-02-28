import { Component ,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent implements OnInit {

  createProducto:FormGroup;
  submitted = false;
  loading = false;
  id:string | null;
  tituloFuncion = 'Agregar Producto';
  botonFuncion = 'Agregar';

  constructor(private fb:FormBuilder, private _productoServive:ProductoService ,
    private router:Router, private toastr: ToastrService, private aRoute:ActivatedRoute){

    this.createProducto = this.fb.group({
      nombre : ['',Validators.required],
      bodega : ['',Validators.required],
      estilo : ['',Validators.required],
      precio : ['',Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit():void{
    this.editar();
  }


  agregarEditarProducto(){
    this.submitted = true;

    if(this.createProducto.invalid){
      return;
    }
    if(this.id ==null){
      this.agregarProducto();
    }
    else{
      this.editarProducto(this.id)
    }
  }

  agregarProducto(){

    const producto:any ={
      nombre:this.createProducto.value.nombre,
      bodega:this.createProducto.value.bodega,
      estilo:this.createProducto.value.estilo,
      precio:this.createProducto.value.precio,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }

    this.loading = true;
    this._productoServive.agregarProducto(producto).then(() =>{
      this.toastr.success("El producto fue registrado con exito", "Producto Registrado");
      this.router.navigate(['/list-productos'])
    } ).catch(error =>{
      console.log(error);
      this.loading = false;
    })
  }

  editarProducto(id:string){

    const producto:any ={
      nombre:this.createProducto.value.nombre,
      bodega:this.createProducto.value.bodega,
      estilo:this.createProducto.value.estilo,
      precio:this.createProducto.value.precio,
      fechaActualizacion: new Date()
    }
    this.loading=true;
    this._productoServive.updateProducto(id,producto).then(()=>{
      this.loading=false;
      this.toastr.info("El producto fue actualizado con exito","Producto actualizado")
      this.router.navigate(['/list-productos'])
    })
  }

  editar(){
    //Metodo que cambia el formulario cuando la funcion es editar
    if(this.id !== null){
      this.loading=true;
      this.tituloFuncion= 'Editar Producto';
      this.botonFuncion='Editar';
      this._productoServive.getProducto(this.id).subscribe(data =>{
        this.loading = false;
        console.log(data);
        this.createProducto.setValue({
          nombre:data.payload.data()['nombre'],
          bodega:data.payload.data()['bodega'],
          estilo:data.payload.data()['estilo'],
          precio:data.payload.data()['precio'],
        })
      })
    }
  }
}
