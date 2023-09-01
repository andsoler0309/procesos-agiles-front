import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuSemana } from '../menu-semana';

@Component({
  selector: 'app-menu-semana-crear',
  templateUrl: './menu-semana-crear.component.html',
  styleUrls: ['./menu-semana-crear.component.css']
})
export class MenuSemanaCrearComponent {
  menuForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private routerPath: Router,
    private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(2)]],
      fechaInicial: ["", Validators.required],
      fechaFinal: ["", Validators.required],
    });
    console.log(this.menuForm.valid);
  }
  

  crearMenu(menu: MenuSemana): void {
    console.log(menu);
    this.toastr.success("Confirmation", "Registro creado")
    this.menuForm.reset();
    this.routerPath.navigate(['/menu-semana/']);
  }
}
