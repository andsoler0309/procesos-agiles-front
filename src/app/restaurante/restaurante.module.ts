import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EncabezadoAppModule } from '../encabezado-app/encabezado-app.module';
import { RestauranteCrearComponent } from './restaurante-crear/restaurante-crear.component';
import { RestauranteListaComponent } from './restaurante-lista/restaurante-lista.component';



@NgModule({
  declarations: [
    RestauranteCrearComponent,
    RestauranteListaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EncabezadoAppModule
  ],
  exports: [
    RestauranteCrearComponent,
    RestauranteListaComponent
  ]
})
export class RestauranteModule { }
