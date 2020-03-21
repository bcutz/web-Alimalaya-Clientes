import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Productos } from 'src/app/models/productos';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css'],
  providers: [ ProductosService ]
})
export class ListadoProductosComponent implements OnInit {

  constructor(public productosServices: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosServices.getProductos()
      .subscribe(res => {
          this.productosServices.productos = res as Productos[]; 
          console.log(res);
      });
      
  }

}
