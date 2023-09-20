import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSemanaCrearComponent } from './menu-semana-crear/menu-semana-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuSemanaListarComponent } from './menu-semana-listar/menu-semana-listar.component';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { MenuSemanaDetalleComponent } from './menu-semana-detalle/menu-semana-detalle.component';
import { RouterModule } from '@angular/router';
import { RecetaDetalleComponent } from '../receta/receta-detalle/receta-detalle.component';

@NgModule({
  declarations: [
    MenuSemanaCrearComponent,
    MenuSemanaListarComponent,
    MenuSemanaDetalleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncabezadoAppModule,
    RouterModule
  ]
})
export class MenuSemanaModule { }
