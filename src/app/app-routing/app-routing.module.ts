import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from '../registrar/registrar.component';
import { ConsultarComponent } from '../consultar/consultar.component';
import { ModificarComponent } from '../modificar/modificar.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes =[
{
  path: '',
  pathMatch: 'full',
  redirectTo: '/home'
 },
{path: 'home',
  component:HomeComponent

},
{path: 'registrar',
  component:RegistrarComponent
},
{path:'consultar',
  component:ConsultarComponent
},
{path:'modificar',
  component:ModificarComponent
}
]
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
