import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurante-lista',
  templateUrl: './restaurante-lista.component.html',
  styleUrls: ['./restaurante-lista.component.css']
})
export class RestauranteListaComponent {

  constructor(
     private routerPath: Router,
  ){}

  crearRestaurante():void {
    this.routerPath.navigate(['/restaurantes/crear/']);
  }


}
