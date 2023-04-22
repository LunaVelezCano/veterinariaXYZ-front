import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrarComponent } from '../registrar/registrar.component';


@Injectable({
  providedIn: 'root'
})
export class RegistroMascotasService {



  constructor( private http: HttpClient) { }
  buscarRegistro(){}
  //(nmidentificacion: string): Observable<RegistrarComponent[]> {
   // return this.db.list<RegistrarComponent>('registros', ref => ref.orderByChild('nmidentificacion').equalTo(nmidentificacion)).valueChanges();
 // }
}

