import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RestauranteListaComponent } from './restaurante-lista/restaurante-lista.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncabezadoAppModule
  ],
  declarations: [
    RestauranteListaComponent,
  ],
  exports: [
    RestauranteListaComponent,
  ]
})
export class RestauranteModule { }
