import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { infoCita } from '../interfaces/infoCita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  servidor = 'http://localhost:8080/api/DatosCita';

  constructor(private servicio: HttpClient) { }

  getDatosCita(): Observable<any> {
    return this.servicio.get(`${this.servidor}`);
  }

  getDatosCitaById(nmid: number): Observable<any> {
    return this.servicio.get<any>(`${this.servidor}/${nmid}`);
  }

  createDatosCita(datosCita: infoCita) {
    return this.servicio.post<infoCita>(`${this.servidor}`, datosCita);
  }

  editar(datosCita: infoCita) {
    return this.servicio.put<infoCita>(`${this.servidor}/${datosCita.nmid}`, datosCita.nmid);
  }
  guardar(datosCita: infoCita) {
    return this.servicio.put<infoCita>(this.servidor, datosCita)
  }
  getCitaByDueno(nmidentificacion_dueno: number): Observable<any> {
    return this.servicio.get<any>(`${this.servidor}/por-dueno-identificacion/${nmidentificacion_dueno}`);
  }
  deleteCita(nmid: number): Observable<any> {
    return this.servicio.delete<any>(`${this.servidor}/delete/${nmid}`);

  }
}
