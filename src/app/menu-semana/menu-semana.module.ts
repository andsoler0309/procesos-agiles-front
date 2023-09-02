import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSemanaCrearComponent } from './menu-semana-crear/menu-semana-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuSemanaListarComponent } from './menu-semana-listar/menu-semana-listar.component';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';

@NgModule({
  declarations: [
    MenuSemanaCrearComponent,
    MenuSemanaListarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncabezadoAppModule
  ]
})
export class MenuSemanaModule { }
