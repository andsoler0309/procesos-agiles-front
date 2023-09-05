import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { ChefCrearComponent } from './chef-crear/chef-crear.component';
import { ChefListaComponent } from './chef-lista/chef-lista.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncabezadoAppModule
  ],
  declarations: [
    ChefCrearComponent,
    ChefListaComponent
  ],
  exports: [
    ChefCrearComponent,
    ChefListaComponent
  ]
})
export class ChefModule { }
