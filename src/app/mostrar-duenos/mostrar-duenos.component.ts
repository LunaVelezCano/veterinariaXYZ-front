import { Component, OnInit } from '@angular/core';
import { RegistroDuenoService } from '../services/registro-dueno.service';
import { infoDueno } from '../interfaces/infoDueno';


@Component({
  selector: 'app-mostrar-duenos',
  templateUrl: './mostrar-duenos.component.html',
  styleUrls: ['./mostrar-duenos.component.scss']
})
export class MostrarDuenosComponent implements OnInit  {

  infoDuenos: any[]=[];

  constructor(private servicioUsuario: RegistroDuenoService) { }

  ngOnInit(): void {
    this.servicioUsuario.getDatosDueno().subscribe(
      ({data}:any) => {
        this.infoDuenos = data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
