import { Component, OnInit } from '@angular/core';
import { infoMascota } from '../interfaces/infoMascota';
import { RegistroMascotasService } from '../services/registro-mascotas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';



@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit, AppRoutingModule {


  constructor(
    private registroService: RegistroMascotasService,
    private route:ActivatedRoute,
    private router: Router){}

    ngOnInit(){



      }



    }

