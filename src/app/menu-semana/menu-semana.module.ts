import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSemanaCrearComponent } from './menu-semana-crear/menu-semana-crear.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuSemanaCrearComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class MenuSemanaModule { }
