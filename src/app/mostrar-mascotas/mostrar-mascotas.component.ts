import { Component,OnInit  } from '@angular/core';
import { infoMascota } from '../interfaces/infoMascota';
import { RegistroMascotasService } from '../services/registro-mascotas.service';

@Component({
  selector: 'app-mostrar-mascotas',
  templateUrl: './mostrar-mascotas.component.html',
  styleUrls: ['./mostrar-mascotas.component.scss']
})
export class MostrarMascotasComponent implements OnInit   {

  infoMascotas: any[]=[];

  constructor(private servicioMascota: RegistroMascotasService) { }

  ngOnInit(): void {
    this.servicioMascota.getDatosMascota().subscribe(
      ({data}:any) => {
        this.infoMascotas = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
