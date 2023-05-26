import {  NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ConsultarComponent } from '../consultar/consultar.component';
import { ModificarComponent } from '../modificar/modificar.component';
import { HomeComponent } from '../home/home.component';
import { IngresarMascotaComponent } from '../ingresar-mascota/ingresar-mascota.component';
import { IngresarDuenoComponent } from '../ingresar-dueno/ingresar-dueno.component';
import { MostrarMascotasComponent } from '../mostrar-mascotas/mostrar-mascotas.component';
import { ConsultarUsuarioComponent } from '../consultar-usuario/consultar-usuario.component';
import { MostrarDuenosComponent } from '../mostrar-duenos/mostrar-duenos.component';
import { MedicoVeterinarioComponent } from '../medico-veterinario/medico-veterinario.component';
import { ProgramarCitaComponent } from '../programar-cita/programar-cita.component';
import { ConsultarCitaComponent } from '../consultar-cita/consultar-cita.component';
import { ModificarCitaComponent } from '../modificar-cita/modificar-cita.component';
import { CancelarCitaComponent } from '../cancelar-cita/cancelar-cita.component';

const routes: Routes =[
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
 },
{path:'home',
  component:HomeComponent
},
{path:'consultar',
  component:ConsultarComponent
},
{path:'modificar',
  component:ModificarComponent
},
{path:'ingresarmascota',
component:IngresarMascotaComponent
},
{path:'ingresarDueno',
component:IngresarDuenoComponent
},
{ path:'mostrarMascotas',
  component:MostrarMascotasComponent
},
{ path:'ConsultarUsuario',
  component: ConsultarUsuarioComponent
},
{path:'mostrarUsuario',
  component: MostrarDuenosComponent
},
{path:'MedicoVeterinario',
  component: MedicoVeterinarioComponent
},
{path:'ProgramarCita',
  component: ProgramarCitaComponent
},
{path:'ConsultarCita',
  component: ConsultarCitaComponent
},
{path:'ModificarCita',
  component: ModificarCitaComponent
},
{path:'CancelarCita',
  component:CancelarCitaComponent
}

]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
