import { Component, OnInit, } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { infoMascota } from '../interfaces/infoMascota';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit, MatCardModule, MatTableModule, MatIconModule, AppRoutingModule {
  registroForm!: FormGroup;
  datosMascota: Array<infoMascota> = [];

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private router: Router){}

    ngOnInit() {
      this.registroForm = this.fb.group({
        nmid: ['', Validators.required],
        dsnom_mascota: ['', Validators.required],
        dsespecie: ['', Validators.required],
        dsraza: ['', Validators.required],
        dtf_nacimiento: ['', Validators.required],
        dsT_identificacion: ['', Validators.required],
        nmidentificacion: ['', Validators.required],
        dsnom_dueno: ['', Validators.required],
        dsciudad: ['', Validators.required],
        dsdireccion: ['', Validators.required],
        nmtelefono: ['', Validators.required],
        dtf_registro: ['', Validators.required],
      });
    }

    onSubmit(){
      console.log(this.registroForm.value);
    }

}

