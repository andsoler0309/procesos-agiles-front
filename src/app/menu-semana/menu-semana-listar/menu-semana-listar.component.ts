import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuSemanaService } from '../menu-semana.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu-semana-listar',
  templateUrl: './menu-semana-listar.component.html',
  styleUrls: ['./menu-semana-listar.component.css']
})
export class MenuSemanaListarComponent {

  menus = [];
  constructor(private routerPath: Router,
    private menuSemanaService: MenuSemanaService,
    private toastr: ToastrService) { }
    
  
  ngOnInit(): void {
    this.menuSemanaService.traerMenuSemana().subscribe((menus) => {
      menus.sort((a, b) => {
        return new Date(a.fecha_inicial).getTime() - new Date(b.fecha_inicial).getTime();
      });
      this.menus = menus;
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
    } )
  }

  crearMenuSemana() {
    this.routerPath.navigate(['/menu-semana/crear']);
  }
}
