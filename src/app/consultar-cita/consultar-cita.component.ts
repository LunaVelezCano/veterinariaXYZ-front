import { Component } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { infoCita } from '../interfaces/infoCita';
import Swal from 'sweetalert2';
import { switchMap, throwError } from 'rxjs';


@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.component.html',
  styleUrls: ['./consultar-cita.component.scss']
})
export class ConsultarCitaComponent {

  formCita: FormGroup = new FormGroup({
    'nmidentificacion_dueno': new FormControl(null, Validators.required)
  });
  infoCita: infoCita[] = [];
  edicionHabilitada: boolean = false;
  cambiosRealizados: boolean = false;

  constructor(private citaService: CitaService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.formCita = this.fb.group({
      nmidentificacion_dueno: ['', Validators.required]
    });
  }
  buscarCita() {
    const nmidentificacion_dueno = this.formCita.value.nmidentificacion_dueno;

    this.citaService.getCitaByDueno(nmidentificacion_dueno).subscribe(
      ({ data }: any) => {
        this.infoCita = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editar(datos: { nmid: any; nmidentificacion_dueno: any; dsnom_mascota: any; nmid_vet: any; dtf_cita: any; hr_cita: any; nmtelefono: any; }) {
    this.formCita.setValue({
      nmid: datos.nmid,
      nmidentificacion_dueno: datos.nmidentificacion_dueno,
      dsnom_mascota: datos.dsnom_mascota,
      nmid_vet: datos.nmid_vet,
      dtf_cita: datos.dtf_cita,
      hr_cita: datos.hr_cita,
    })
  }

  guardar(cita: infoCita) {
    if (this.formCita.valid && this.formCita.value.nmidentificacion_dueno && this.formCita.value.nmidentificacion_dueno !== 0) {
      this.citaService.guardar(cita).subscribe(
        {
          next: datosCita => {
            console.log('Cita Modificada:', datosCita);
            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success'
            )
          },
          error: error => {
            console.error(error)
            Swal.fire(
              'Error',
              'You clicked the button!',
              'error'
            )
          }
        });
    }
  }
  onEdit(item: any) {

    this.infoCita.forEach(element => { element.isEdit = false; })
    item.isEdit = true;
  }
  borrarRegistro(nmid: number) {
    if (this.formCita.valid && nmid && nmid !== 0) {
        this.citaService.deleteCita(nmid).subscribe(
            () => console.log('Registro borrado correctamente'),
            error => console.error('Error al borrar el registro', error)
        );
    }
}

  limpiarFormulario() {
    this.formCita.reset();
    this.infoCita = [];
  }
}

