import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { infoMascota } from '../interfaces/infoMascota';


@Injectable({
  providedIn: 'root'
})
export class RegistroMascotasService {
  servidor = 'http://localhost:8080/api/DatosMascota';

  constructor(private servicio: HttpClient) { }

  getDatosMascota(): Observable<any> {
    return this.servicio.get(`${this.servidor}`);
  }

  createDatosMascota(datosMascota: infoMascota) {
    return this.servicio.post<infoMascota>(`${this.servidor}`, datosMascota);
  }

  editar(datosMascota: infoMascota) {
    return this.servicio.put<infoMascota>(`${this.servidor}/${datosMascota.nmid}`, datosMascota.nmid);
  }
  guardar(datosMascota: infoMascota) {
    return this.servicio.put<infoMascota>(this.servidor, datosMascota)
  }


  getMascotasByDueno(nmidentificacion_dueno: number): Observable<any> {
    return this.servicio.get<any>(`${this.servidor}/por-dueno-identificacion/${nmidentificacion_dueno}`);
  }

  }

