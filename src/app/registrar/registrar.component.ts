import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegistroMascotasService } from '../services/registro-mascotas.service';
import { infoMascota } from '../interfaces/infoMascota';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';


import { AppRoutingModule } from '../app-routing/app-routing.module';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent  {



registroForm: FormGroup = this.fb.group({
  dsnom_mascota: ['', [Validators.required]],
    dsespecie: ['', [Validators.required]],
    dsraza: ['', [Validators.required]],
    dtf_nacimiento: [new Date(), [Validators.required]],
    dsT_identificacion: ['', [Validators.required]],
    nmidentificacion: [0, [Validators.required]],
    dsnom_dueno: ['', [Validators.required]],
    dsciudad: ['', [Validators.required]],
    dsdireccion: ['', [Validators.required]],
    nmtelefono: [0, [Validators.required]],
    dtf_registro: [new Date(), [Validators.required]]
});

constructor( private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private http: HttpClient, private servicioMascota:RegistroMascotasService ){}

crearRegistro() {
  this.servicioMascota.createDatosMascota(this.registroForm.value).subscribe(
    {
     next: datosMascota => console.log('Registro creado:', datosMascota),
    error: error => console.error(error)
    }
  );
}

}



