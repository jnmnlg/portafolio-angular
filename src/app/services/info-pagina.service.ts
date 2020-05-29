import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    //  console.log('Servicio de infoPagina listo!!');
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
      //  console.log(resp);
      });
  }

  private cargarEquipo() {
    // Leer archivo json
    this.http.get('https://angular-html-633c3.firebaseio.com/equipo.json')
      .subscribe((resp: any[]) => {
        this.cargada = true;
        this.equipo = resp;
      //  console.log(resp);
      });
  }

}
