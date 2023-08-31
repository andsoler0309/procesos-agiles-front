import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Restaurante } from '../restaurante';

@Component({
  selector: 'app-restaurante-crear',
  templateUrl: './restaurante-crear.component.html',
  styleUrls: ['./restaurante-crear.component.css']
})
export class RestauranteCrearComponent {

  restauranteForm: FormGroup;


  crearRestaurante(nuevoRestaurante: Restaurante){


  }

  cancelarRestaurante(){

  }
}
