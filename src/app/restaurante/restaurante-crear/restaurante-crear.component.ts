import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-crear',
  templateUrl: './restaurante-crear.component.html',
  styleUrls: ['./restaurante-crear.component.css']
})
export class RestauranteCrearComponent implements OnInit{

  restauranteForm: FormGroup;
  didi : boolean = false;

   constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private restauranteService: RestauranteService
  ) { }

  ngOnInit(): void {
    this.restauranteForm = this.formBuilder.group({
      nombre: ["",[Validators.required, Validators.minLength(2),Validators.maxLength(100)]],
      direccion: ["",[Validators.required, Validators.minLength(2),Validators.maxLength(200)]],
      telefono: ["",[]],
      tipo_comida: ["",[Validators.required, Validators.minLength(2),Validators.maxLength(100)]],
      facebook: ["",[]],
      twitter: ["",[]],
      instagram: ["",[]],
      hora_atencion: ["",[Validators.required, Validators.minLength(2),Validators.maxLength(100)]],
      is_en_lugar: [false,[]],
      is_domicilios: [false,[]],
      is_rappi: [false,[]],
      is_didi: [false,[]]
    });


  }

  crearRestaurante(nuevoRestaurante: Restaurante): void{
    this.restauranteService.crearRestaurante(nuevoRestaurante).subscribe((restaurante) => {
      this.toastr.success("Confirmation", "Registro creado")
      this.restauranteForm.reset();
      this.routerPath.navigate(['/restaurantes/']);
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","El nombre del restaurante ya existe, por favor ingrese otro.")
      }
      else {
        this.toastr.error("Error","Ha ocurrido un error. " + error.message)
      }
    });

  }

  cancelarRestaurante(){
    this.restauranteForm.reset();
    this.routerPath.navigate(['/restaurantes/']);
  }
}
