import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Producto } from 'src/app/interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get('https://angular-html-633c3.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        //        console.log(resp);
        this.productos = resp;
        this.cargando = false;
      });
  }

  getProducto(id: string) {

    return this.http.get(`https://angular-html-633c3.firebaseio.com/productos/${id}.json`);

  }

  getProducto2(id: string) {
    return this.http.get(`https://angular-html-633c3.firebaseio.com/productos/${id}.json`);
  }

}
