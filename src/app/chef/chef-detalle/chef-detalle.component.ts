import { Component, Input, OnInit } from '@angular/core';
import { Chef } from '../chef';
import { Restaurante } from 'src/app/restaurante/restaurante';
import { ChefService } from '../chef.service';
import { RestauranteService } from 'src/app/restaurante/restaurante.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-detalle',
  templateUrl: './chef-detalle.component.html',
  styleUrls: ['./chef-detalle.component.css']
})
export class ChefDetalleComponent implements OnInit {
  
  @Input() chef: Chef;
  restaurante: Restaurante;

  constructor(
    private routerPath: Router,
    private toastr: ToastrService,
    private chefService: ChefService,
  ){}

  ngOnInit(): void {
    this.obtenerChef(this.chef.id)
  }

  obtenerChef(id_chef: number): void {
    this.chefService.obtenerChef(id_chef).subscribe((chef) => {
      this.chef = chef;
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
