import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroMascotasService } from '../services/registro-mascotas.service';
import { infoMascota } from '../interfaces/infoMascota';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@Component({
  selector: 'app-ingresar-mascota',
  templateUrl: './ingresar-mascota.component.html',
  styleUrls: ['./ingresar-mascota.component.scss']
})
export class IngresarMascotaComponent {

  registroForm: FormGroup = this.fb.group({
    dsnom_mascota: ['', [Validators.required]],
      dsespecie: ['', [Validators.required]],
      dsraza: ['', [Validators.required]],
      dtf_nacimiento: [new Date(), [Validators.required]],
      dtf_registro: [new Date(), [Validators.required]],
      nmidentificacion_dueno: [0, [Validators.required]]
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private http: HttpClient, private servicioMascota:RegistroMascotasService){}

  crearRegistro() {
    this.servicioMascota.createDatosMascota(this.registroForm.value).subscribe(
      {
       next: datosMascota => console.log('Registro creado:', datosMascota),
      error: error => console.error(error)
      });

  }

  limpiarFormulario(){
    this.registroForm.reset();
  }
}
