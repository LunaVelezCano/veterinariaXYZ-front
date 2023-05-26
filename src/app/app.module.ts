import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import { IngresarMascotaComponent } from './ingresar-mascota/ingresar-mascota.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { HttpClientModule  } from '@angular/common/http';
import { IngresarDuenoComponent } from './ingresar-dueno/ingresar-dueno.component';
import { MostrarMascotasComponent } from './mostrar-mascotas/mostrar-mascotas.component';
import { ConsultarUsuarioComponent } from './consultar-usuario/consultar-usuario.component';
import { MostrarDuenosComponent } from './mostrar-duenos/mostrar-duenos.component';
import { MedicoVeterinarioComponent } from './medico-veterinario/medico-veterinario.component';
import { ProgramarCitaComponent } from './programar-cita/programar-cita.component';
import { ConsultarCitaComponent } from './consultar-cita/consultar-cita.component';
import { ModificarCitaComponent } from './modificar-cita/modificar-cita.component';
import { CancelarCitaComponent } from './cancelar-cita/cancelar-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsultarComponent,
    ModificarComponent,
    HomeComponent,
    IngresarMascotaComponent,
    IngresarDuenoComponent,
    MostrarMascotasComponent,
    ConsultarUsuarioComponent,
    MostrarDuenosComponent,
    MedicoVeterinarioComponent,
    ProgramarCitaComponent,
    ConsultarCitaComponent,
    ModificarCitaComponent,
    CancelarCitaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
