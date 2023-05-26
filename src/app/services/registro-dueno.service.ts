import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { infoDueno } from '../interfaces/infoDueno';

@Injectable({
  providedIn: 'root'
})
export class RegistroDuenoService {
  servidor = 'http://localhost:8080/api/DatosDueno';

  constructor(private servicio: HttpClient) { }

  getDatosDueno(): Observable<any> {
    return this.servicio.get(`${this.servidor}`);
  }

  createDatosDueno(datosDueno: infoDueno) {
    return this.servicio.post<infoDueno>(`${this.servidor}`, datosDueno);
  }

  editar(datosDueno: infoDueno) {
    return this.servicio.put<infoDueno>(`${this.servidor}/${datosDueno.nmidentificacion}`, datosDueno.nmidentificacion);
  }

  guardar(datosDueno: infoDueno) {
    return this.servicio.put<infoDueno>(this.servidor, datosDueno)
  }

getById(nmidentificacion: number): Observable<any> {
  return this.servicio.get<any>(`${this.servidor}/${nmidentificacion}`);
}

}
