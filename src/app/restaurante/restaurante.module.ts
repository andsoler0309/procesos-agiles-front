import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RestauranteListaComponent } from './restaurante-lista/restaurante-lista.component';
import { RestauranteCrearComponent } from './restaurante-crear/restaurante-crear.component';
import { RestauranteDetalleComponent } from './restaurante-detalle/restaurante-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncabezadoAppModule
  ],
  declarations: [
    RestauranteCrearComponent,
    RestauranteListaComponent,
    RestauranteDetalleComponent,
  ],
  exports: [
    RestauranteCrearComponent,
    RestauranteListaComponent,
  ]
})
export class RestauranteModule { }
