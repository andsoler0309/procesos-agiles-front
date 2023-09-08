import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuSemanaService } from '../menu-semana.service';

@Component({
  selector: 'app-menu-semana-listar',
  templateUrl: './menu-semana-listar.component.html',
  styleUrls: ['./menu-semana-listar.component.css']
})
export class MenuSemanaListarComponent {

  menus = [];
  constructor(private routerPath: Router,
    private menuSemanaService: MenuSemanaService) { }
    
  
  ngOnInit(): void {
    this.menuSemanaService.traerMenuSemana().subscribe((menus) => {
      this.menus = menus;
      console.log(this.menus);
    })
  }

  crearMenuSemana() {
    this.routerPath.navigate(['/menu-semana/crear']);
  }
}
