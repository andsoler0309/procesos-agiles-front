import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-semana-listar',
  templateUrl: './menu-semana-listar.component.html',
  styleUrls: ['./menu-semana-listar.component.css']
})
export class MenuSemanaListarComponent {
  constructor(private routerPath: Router) { }
  crearMenuSemana() {
    this.routerPath.navigate(['/menu-semana/crear']);
  }
}
