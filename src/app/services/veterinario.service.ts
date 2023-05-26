import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { infoVet } from '../interfaces/infoVet';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {
  servidor = 'http://localhost:8080/api/DatosVet';
  constructor(private servicio: HttpClient) { }

  getDatosVet(): Observable<any> {
    return this.servicio.get(`${this.servidor}`);
  }


}
