import { Component, OnInit } from '@angular/core';
import { RegistroMascotasService } from '../services/registro-mascotas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.scss']
})
export class ConsultarComponent implements OnInit{

  formConsulta: FormGroup = new FormGroup({
    'nmidentificacion_dueno': new FormControl(null, Validators.required)
  });
  infoMascotas!: any[];


  constructor(private mascotaService: RegistroMascotasService, private route:ActivatedRoute, private router: Router,private fb: FormBuilder){
    this.formConsulta = this.fb.group({
      nmidentificacion_dueno: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  buscarMascotas() {
    const nmidentificacion_dueno = this.formConsulta.value.nmidentificacion_dueno;

    this.mascotaService.getMascotasByDueno(nmidentificacion_dueno).subscribe(
      ({data}:any) => {
        this.infoMascotas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  limpiarFormulario(){
    this.formConsulta.reset();
    this.infoMascotas = [];
  }

  }



