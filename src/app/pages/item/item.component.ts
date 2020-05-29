import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(parametros => {

        console.log('Id del parametro: ' + parametros['id']);

        this.productoService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion) => {
            console.log(producto);
          });

      });

  }

}
