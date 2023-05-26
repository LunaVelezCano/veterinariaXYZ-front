import { Component } from '@angular/core';
import { RegistroDuenoService} from '../services/registro-dueno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { infoDueno } from '../interfaces/infoDueno';

@Component({
  selector: 'app-consultar-usuario',
  templateUrl: './consultar-usuario.component.html',
  styleUrls: ['./consultar-usuario.component.scss']
})
export class ConsultarUsuarioComponent {


  formConsultaUsuario: FormGroup = new FormGroup({
    'nmidentificacion': new FormControl(null, Validators.required)
  });

  datosUsuario: infoDueno[] = [];

  constructor(private duenoService: RegistroDuenoService, private route:ActivatedRoute, private router: Router,private fb: FormBuilder){
    this.formConsultaUsuario = this.fb.group({
      nmidentificacion: ['', Validators.required]
    });
  }
  buscarDuenos() {
    const nmidentificacion = this.formConsultaUsuario.get('nmidentificacion')?.value;
    this.duenoService.getById(nmidentificacion).subscribe(
      (data: any) => {
        if (data.code === 0) {
          this.datosUsuario = [data.data];
        } else {
          console.log('Error al buscar información del usuario', data.message);
        }
      },
      (error: any) => {
        console.log('Error al buscar información del usuario', error);
      }
    );
  }

  limpiarFormulario(){
    this.formConsultaUsuario.reset();
    this.datosUsuario = [];
  }
  }
