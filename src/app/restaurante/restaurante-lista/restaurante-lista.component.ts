import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante.service';
import { Restaurante } from '../restaurante';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurante-lista',
  templateUrl: './restaurante-lista.component.html',
  styleUrls: ['./restaurante-lista.component.css'],
})
export class RestauranteListaComponent implements OnInit {

  restaurantes:Array<Restaurante> = []
  error: string;
  restauranteElegido: Restaurante;
  deleteButtonClicked = false;

  constructor(
    private routerPath: Router,
    private restauranteService: RestauranteService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.restauranteService.traerRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        if (error.error === "Solo los Administradores pueden ver Restaurantes") {
          this.toastr.error("Error","Solo los Administradores pueden ver Restaurantes")
          this.error = error.error;
        } else {
          this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
        }
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else {
        this.toastr.error("Error","Ha ocurrido un error. " + error.message)
      }
    });
  }

  crearRestaurante():void {
    if (this.error) {
      this.toastr.error("Error","Solo los Administradores pueden crear Restaurantes")
      return;
    }

    this.routerPath.navigate(['/restaurantes/crear/']);
  }

  verDetalle(restaurante: Restaurante): void {
    if (this.restauranteElegido && this.restauranteElegido.id === restaurante.id) {
      this.restauranteElegido = null;
      return;
    }
    this.restauranteElegido = restaurante
  }

  editarRestaurante(restuanteId: number): void {
    this.routerPath.navigate(['/restaurantes/editar/' + restuanteId]);
  }

  borrarRestaurante(restuanteId: number): void {
    this.restauranteService.borrarRestaurante(restuanteId).subscribe((restaurante) => {
    this.toastr.success("Éxito","Restaurante borrado correctamente")
    this.ngOnInit();
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        if (error.error === "Solo los Administradores pueden borrar Restaurantes") {
          this.toastr.error("Error","Solo los Administradores pueden borrar Restaurantes")
          this.error = error.error;
        } else {
          this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
        }
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else {
        this.toastr.error("Error","Ha ocurrido un error. " + error.message)
      }
    });
  }
}
