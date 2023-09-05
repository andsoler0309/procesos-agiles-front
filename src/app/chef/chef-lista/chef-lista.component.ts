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

  crearChef():void {
    this.routerPath.navigate(['/chefs/crear/']);
  }

}
