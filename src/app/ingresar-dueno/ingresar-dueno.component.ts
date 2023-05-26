import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RegistroDuenoService } from '../services/registro-dueno.service';
import { infoDueno} from '../interfaces/infoDueno';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@Component({
  selector: 'app-ingresar-dueno',
  templateUrl: './ingresar-dueno.component.html',
  styleUrls: ['./ingresar-dueno.component.scss']
})
export class IngresarDuenoComponent {

  registroDuenoForm: FormGroup = this.fb.group({
    nmidentificacion: [0, [Validators.required]],
    dsT_identificacion: ['', [Validators.required]],
    dsnom_dueno: ['', [Validators.required]],
    dsciudad: ['', [Validators.required]],
    dsdireccion: ['', [Validators.required]],
    nmtelefono: [0, [Validators.required]]
  });

constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private http: HttpClient, private servicioDueno:RegistroDuenoService){}

crearRegistro() {
  this.servicioDueno.createDatosDueno(this.registroDuenoForm.value).subscribe(
    {
     next: datosDueno => console.log('Registro creado:', datosDueno),
    error: error => console.error(error)
    });

}

limpiarFormulario(){
  this.registroDuenoForm.reset();
}
}

