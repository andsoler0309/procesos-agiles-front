import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chef } from '../chef';
import { ChefService } from '../chef.service';
import { RestauranteService } from 'src/app/restaurante/restaurante.service';
import { Restaurante } from 'src/app/restaurante/restaurante';

@Component({
  selector: 'app-chef-crear',
  templateUrl: './chef-crear.component.html',
  styleUrls: ['./chef-crear.component.css']
})
export class ChefCrearComponent implements OnInit {

  chefForm: FormGroup;
  restaurantes:Array<Restaurante> = []

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private chefService: ChefService,
    private restauranteService: RestauranteService,
  ) {

   }


  ngOnInit(): void {

    this.obtenerRestaurantes()
    this.chefForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      contrasena: ["", [Validators.required, Validators.minLength(8)]],
      usuario: ["", [Validators.required, Validators.minLength(2), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      restaurante_id: ["", [Validators.required]],
    });
  }

  crearChef(nuevoChef: Chef): void {
    this.chefService.crearChef(nuevoChef).subscribe(() => {
      this.toastr.success("Confirmation", "Registro creado")
      this.chefForm.reset();
      this.routerPath.navigate(['/chefs/']);
    },
    error => {
      console.log(error)
      if (error.statusText === "UNAUTHORIZED") {
        this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else if (error.error) {
        this.toastr.error("Error", error.error)
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
}
