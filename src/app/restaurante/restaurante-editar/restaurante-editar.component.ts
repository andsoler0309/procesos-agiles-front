import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-editar',
  templateUrl: './restaurante-editar.component.html',
  styleUrls: ['./restaurante-editar.component.css']
})
export class RestauranteEditarComponent implements OnInit {

  restaurante: Restaurante;
  restauranteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
    private restauranteService: RestauranteService
  ) { }

  ngOnInit() {
    const idRestaurante = parseInt(this.router.snapshot.params['id']);
    this.restauranteService.obtenerRestaurante(idRestaurante).subscribe((restaurante) => {
      this.restaurante = restaurante;
      this.restauranteForm = this.formBuilder.group({
        id: [this.restaurante.id, []],
        nombre: [this.restaurante.nombre, []],
        direccion: [this.restaurante.direccion, []],
        telefono: [this.restaurante.telefono, []],
        facebook: [this.restaurante.facebook, []],
        twitter: [this.restaurante.twitter, []],
        instagram: [this.restaurante.instagram, []],
        hora_atencion: [this.restaurante.hora_atencion, []],
        is_en_lugar: [this.restaurante.is_en_lugar, []],
        is_domicilios: [this.restaurante.is_domicilios, []],
        tipo_comida: [this.restaurante.tipo_comida, []],
        is_rappi: [this.restaurante.is_rappi, []],
        is_didi: [this.restaurante.is_didi, []],
        administrador: [this.restaurante.administrador, []],
        chefs: [this.restaurante.chefs, []],
        menu_semana: [this.restaurante.menu_semana, []]
      });
    });
  }

  editarRestaurante(restaurante: Restaurante): void {
    this.restauranteService.editarRestaurante(restaurante).subscribe((restaurante) => {
      this.toastr.success("Confirmation", "Información editada")
      this.restauranteForm.reset();
      this.routerPath.navigate(['/restaurantes/']);
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

  cancelarRestaurante(){
    this.restauranteForm.reset();
    this.routerPath.navigate(['/restaurantes/']);
  }
}
