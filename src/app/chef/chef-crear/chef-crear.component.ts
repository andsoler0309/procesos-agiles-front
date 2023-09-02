import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chef } from '../chef';
import { ChefService } from '../chef.service';

@Component({
  selector: 'app-chef-crear',
  templateUrl: './chef-crear.component.html',
  styleUrls: ['./chef-crear.component.css']
})
export class ChefCrearComponent implements OnInit {
  
  chefForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private chefService: ChefService
  ) { }


  ngOnInit(): void {
    this.chefForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      contrasena: ["", [Validators.required, Validators.minLength(8)]],
      correo: ["", [Validators.required, Validators.minLength(2)]],
    });
  }

  crearChef(nuevoChef: Chef): void {
    this.chefService.crearChef(nuevoChef).subscribe((receta) => {
      this.toastr.success("Confirmation", "Registro creado")
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
