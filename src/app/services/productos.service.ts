import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { from } from 'rxjs';
import { Productos } from '../models/productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  selectedProductos: Productos;
  productos: Productos[];
  readonly URL_API = 'http://localhost:3000/listado';

  constructor(private http: HttpClient) {
    this.selectedProductos = new Productos();
     }

  getProductos (){
        return this.http.get(this.URL_API);
  }

  getProductosUnico (_id: string ){
    return this.http.get(this.URL_API + `/${_id}`);
  }
}
