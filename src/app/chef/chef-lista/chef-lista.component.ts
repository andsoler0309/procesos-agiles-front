import { Component, OnInit } from '@angular/core';
import { ChefService } from '../chef.service';
import { Chef } from '../chef';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-lista',
  templateUrl: './chef-lista.component.html',
  styleUrls: ['./chef-lista.component.css']
})
export class ChefListaComponent implements OnInit {

  chefs:Array<Chef> = []
  error: string;
  chefElegido: Chef;
  deleteButtonClicked: boolean = false;

  constructor(
    private routerPath: Router,
    private chefService: ChefService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.chefService.traerChefs().subscribe((chefs) => {
      this.chefs = chefs;
    },
    error => {
      if (error.statusText === "UNAUTHORIZED") {
        if (error.error === "Solo los Administradores pueden ver Chefs") {
          this.toastr.error("Error","Solo los Administradores pueden ver Chefs")
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

  crearChef():void {
    if (this.error) {
      this.toastr.error("Error","Solo los Administradores pueden crear Chefs")
      return;
    }

    this.routerPath.navigate(['/chefs/crear/']);
  }

  verDetalle(chef: Chef): void {
    if (this.chefElegido && this.chefElegido.id === chef.id) {
      this.chefElegido = null;
      return;
    }

    this.chefElegido = chef
  }

  editarChef(chefId: number): void {
    if (this.error) {
      this.toastr.error("Error","Solo los Administradores pueden editar Chefs")
      return;
    }

    this.routerPath.navigate(['/chefs/editar/' + chefId]);
  }

  borrarChef(chefId: number): void {
    this.chefService.borrarChef(chefId).subscribe((chef) => {
      this.toastr.success("Confirmation", "Registro eliminado de la lista")
      this.ngOnInit();
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
    });
  }
}
