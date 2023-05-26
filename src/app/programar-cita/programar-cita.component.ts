import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitaService } from '../services/cita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@Component({
  selector: 'app-programar-cita',
  templateUrl: './programar-cita.component.html',
  styleUrls: ['./programar-cita.component.scss']
})
export class ProgramarCitaComponent {

  CitaForm: FormGroup = this.fb.group({
    nmidentificacion_dueno: ['', [Validators.required]],
    dsnom_mascota: ['', [Validators.required]],
    nmid_vet: ['', [Validators.required]],
    dtf_cita: [new Date(), [Validators.required]],
    hr_cita: ['', [Validators.required]],
    nmtelefono: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private http: HttpClient, private servicioCita: CitaService){}


  ProgramarCita() {
    this.servicioCita.createDatosCita(this.CitaForm.value).subscribe(
      {
       next: datosCita => console.log('Cita Programada:', datosCita),
      error: error => console.error(error)
      });

  }

  limpiarFormulario(){
    this.CitaForm.reset();
  }
}


