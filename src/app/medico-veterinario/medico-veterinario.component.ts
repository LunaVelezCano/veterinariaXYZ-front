import { Component, OnInit } from '@angular/core';
import { infoVet } from '../interfaces/infoVet';
import { VeterinarioService } from '../services/veterinario.service';

@Component({
  selector: 'app-medico-veterinario',
  templateUrl: './medico-veterinario.component.html',
  styleUrls: ['./medico-veterinario.component.scss']
})
export class MedicoVeterinarioComponent implements OnInit {

  infoVet: any[]=[];

  constructor(private servicioVet: VeterinarioService){}

  ngOnInit(): void {
    this.servicioVet.getDatosVet().subscribe(
      ({data}:any) => {
        this.infoVet = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
