import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuSemana } from '../menu-semana';
import { RecetaService } from 'src/app/receta/receta.service';
import { Receta } from 'src/app/receta/receta';
import { MenuSemanaService } from '../menu-semana.service';
import { RestauranteService } from 'src/app/restaurante/restaurante.service';
import { Restaurante } from 'src/app/restaurante/restaurante';

@Component({
  selector: 'app-menu-semana-crear',
  templateUrl: './menu-semana-crear.component.html',
  styleUrls: ['./menu-semana-crear.component.css']
})
export class MenuSemanaCrearComponent {
  menuForm: FormGroup;
  recetaSubForm: FormArray;
  recetas: Receta[] = [];
  restaurantes: Restaurante[] = [];
  rol: string = sessionStorage.getItem('rol');

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService,
    private recetaService: RecetaService,
    private menuSemanaService: MenuSemanaService,
    private restaranteService: RestauranteService) {

  }

  ngOnInit(): void {
    this.recetaSubForm = this.formBuilder.array([
      this.formBuilder.group({
        id: ["", Validators.required]
      })
    ])
    this.menuForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      fechaInicial: ["", Validators.required],
      fechaFinal: ["", Validators.required],
      recetas: this.recetaSubForm,
      id_restaurante: ["", this.rol==='ADMINISTRADOR' ? Validators.required : null]
    });
    this.darRecetas();
    this.darRestaurantes();
  }


  crearMenu(menu: MenuSemana): void {
    this.menuSemanaService.crearMenuSemana(menu).subscribe((menu) => {
      this.toastr.success("Confirmation", "Registro creado")
      this.menuForm.reset();
      this.routerPath.navigate(['/menu-semana/crear']);
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        this.toastr.error("Error","Su sesión ha caducado, por favor vuelva a iniciar sesión.")
      }
      else if (error.statusText === "UNPROCESSABLE ENTITY") {
        this.toastr.error("Error","No hemos podido identificarlo, por favor vuelva a iniciar sesión.")
      }
      else {
        this.toastr.error("Error", error.error)
      }
    })


  }

  darRecetas(): void {
    this.recetaService.darRecetas().subscribe((recetas) => {
        this.recetas = recetas;
        if(this.recetas.length == 0){
          this.toastr.error("Error","No hay recetas registradas")
        }
    })
  }

  darRestaurantes(): void {
    this.restaranteService.traerRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
    })
  }

  adicionarReceta(): void {
    const filaNueva = this.formBuilder.group({
      id: ["", Validators.required]
    })

    this.recetaSubForm.push(filaNueva)
  }

  calcularFechaFinal(): void {
    const fechaInicial = this.menuForm.get('fechaInicial').value;
    const fechaFinal = new Date(fechaInicial);
    fechaFinal.setDate(fechaFinal.getDate() + 7);
    const dia = fechaFinal.getDate().toString().padStart(2, '0');
    const mes = (fechaFinal.getMonth() + 1).toString().padStart(2, '0');
    const ano = fechaFinal.getFullYear();
    this.menuForm.get('fechaFinal').setValue(`${ano}-${mes}-${dia}`);
    
  }

  cancelarMenu(): void {
    this.menuForm.reset();
    this.routerPath.navigate(['/menu-semana']);
  }

  eliminarIngrediente(indice: number): void {
    this.recetaSubForm.removeAt(indice)
  }
}
