import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from 'src/app/restaurante/restaurante';
import { ToastrService } from 'ngx-toastr';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-detalle',
  templateUrl: './restaurante-detalle.component.html',
  styleUrls: ['./restaurante-detalle.component.css']
})
export class RestauranteDetalleComponent implements OnInit {

  @Input() restaurante: Restaurante;

  constructor(
    private toastr: ToastrService,
    private restauranteService: RestauranteService,
  ){}

  ngOnInit(): void {
    this.obtenerRestaurante(this.restaurante.id)
  }

  obtenerRestaurante(id_restaurante: number): void {
    this.restauranteService.obtenerRestaurante(id_restaurante).subscribe((restaurante) => {
      this.restaurante = restaurante;
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else {
        this.toastr.error("Error","Ha ocurrido un error. " + error.message)
      }
    })
  }
}
