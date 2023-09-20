import { Component, Input } from '@angular/core';
import { MenuSemana, MenuSemanaDetalle } from '../menu-semana';
import { ToastrService } from 'ngx-toastr';
import { Receta } from 'src/app/receta/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-semana-detalle',
  templateUrl: './menu-semana-detalle.component.html',
  styleUrls: ['./menu-semana-detalle.component.css']
})
export class MenuSemanaDetalleComponent {

  @Input() menuDetalle: MenuSemanaDetalle;
  display = "none";
  constructor(
    private toastr: ToastrService,
    private router: Router
  ) { }

  recetaSeleccion(idReceta: number) {
    
    localStorage.setItem('token', sessionStorage.getItem('token'));
    localStorage.setItem('idUsuario', sessionStorage.getItem('idUsuario'));
    localStorage.setItem('rol', sessionStorage.getItem('rol'));
    localStorage.setItem('idreceta', idReceta.toString());
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/recetas`])
    );
    window.open(url, '_blank');
  }

}
