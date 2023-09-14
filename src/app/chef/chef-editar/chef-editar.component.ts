import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chef } from '../chef';
import { ChefService } from '../chef.service';
import { Restaurante } from 'src/app/restaurante/restaurante';
import { RestauranteService } from 'src/app/restaurante/restaurante.service';

@Component({
  selector: 'app-chef-editar',
  templateUrl: './chef-editar.component.html',
  styleUrls: ['./chef-editar.component.css']
})
export class ChefEditarComponent implements OnInit {

  chefForm: FormGroup;
  restaurantes:Array<Restaurante> = []
  chef: Chef;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
    private chefService: ChefService,
    private restauranteService: RestauranteService,
  ) { }

  ngOnInit() {
    const chefId = parseInt(this.router.snapshot.params['id']);

    this.restauranteService.traerRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
      this.chefService.obtenerChef(chefId).subscribe((chef) => {
        this.chef = chef;
        this.chefForm = this.formBuilder.group({
          id: [this.chef.id, []],
          nombre: [this.chef.nombre, [Validators.required]],
          usuario: [this.chef.usuario, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
          restaurante_id: [this.chef.restaurante.id, [Validators.required]],
        });
      });
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

  editarchef(chef: Chef): void {
    this.chefService.editarChef(chef).subscribe((chef) => {
      this.toastr.success("Confirmation", "Información editada")
      this.chefForm.reset();
      this.routerPath.navigate(['/chefs/']);
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

  cancelarChef(): void {
    this.chefForm.reset();
    this.routerPath.navigate(['/chefs/']);
  }
}
