import { Component, OnInit } from '@angular/core';
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

  chef: Chef;
  chefForm: FormGroup;
  userRol = sessionStorage.getItem('rol');
  restaurantes:Array<Restaurante> = []
  restauranteService: RestauranteService;

  constructor(
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private routerPath: Router,
    private toastr: ToastrService,
    private chefService: ChefService
  ) { }

  ngOnInit() {
    const idChef = parseInt(this.router.snapshot.params['id']);
    this.obtenerRestaurantes()
    this.chefService.obtenerChef(idChef).subscribe((chef) => {
      this.chef = chef;
      this.chefForm = this.formBuilder.group({
        id: [this.chef.id, []],
        nombre: [this.chef.nombre, [Validators.required, Validators.minLength(2)]],
        usuario: [this.chef.usuario, [Validators.required, Validators.minLength(2)]],
        restaurante: [this.chef.restaurante, [Validators.required, Validators.minLength(2)]],
      });
    });
  }

  obtenerRestaurantes(): void {
    this.restauranteService.traerRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
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
