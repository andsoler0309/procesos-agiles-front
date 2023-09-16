/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChefEditarComponent } from './chef-editar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ToastrModule } from 'ngx-toastr';
import { Usuario } from 'src/app/usuario/usuario';
import { Restaurante } from 'src/app/restaurante/restaurante';
import { Chef } from '../chef';

describe('ChefEditarComponent', () => {
  let component: ChefEditarComponent;
  let fixture: ComponentFixture<ChefEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        EncabezadoAppModule,
        ToastrModule.forRoot({
          timeOut: 7000,
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
        })
      ],
      declarations: [ ChefEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(ChefEditarComponent);
    component = fixture.componentInstance;
    const usuario = new Usuario('admin', 'admin');
    const restaurante = new Restaurante(
      1,
      'Restaurante 1',
      'Calle 1',
      '1234567',
      'facebook',
      'twitter',
      'instagram',
      '8:00 - 18:00',
      true,
      true,
      'comida',
      true,
      true,
      usuario
    )

    component.chef = new Chef(
      1,
      'Chef 1',
      'Apellido 1',
      restaurante
    ),

    component.chefForm = fb.group({
      nombre: [component.chef.nombre, [Validators.required, Validators.minLength(2)]],
      usuario: [component.chef.usuario, [Validators.required, Validators.minLength(2), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      restaurante_id: [component.chef.restaurante, [Validators.required]],
  });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined chefForm', () => {
    expect(component.chefForm).toBeDefined();
  });

  it('should be invalid when empty', () => {
    expect(component.chefForm.valid).toBeFalsy();
  });

  it('should have a nombre field', () => {
    let nombre = component.chefForm.controls['nombre'];
    expect(nombre.value).toEqual(component.chef.nombre);
  });

  it('should be invalid when nombre is less than 2 characters', () => {
    let errors = {};
    let nombre = component.chefForm.controls['nombre'];
    nombre.setValue("a");
    errors = nombre.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('should be invalid when nombre is empty', () => {
    let errors = {};
    let nombre = component.chefForm.controls['nombre'];
    nombre.setValue("");
    errors = nombre.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should have a usuario field', () => {
    let usuario = component.chefForm.controls['usuario'];
    expect(usuario.value).toEqual(component.chef.usuario);
  });

  it('should be invalid when usuario is less than 2 characters', () => {
    let errors = {};
    let usuario = component.chefForm.controls['usuario'];
    usuario.setValue("a");
    errors = usuario.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('should be invalid when usuario is empty', () => {
    let errors = {};
    let usuario = component.chefForm.controls['usuario'];
    usuario.setValue("");
    errors = usuario.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should be invalid when usuario is not an email', () => {
    let errors = {};
    let usuario = component.chefForm.controls['usuario'];
    usuario.setValue("a");
    errors = usuario.errors || {};
    expect(errors['pattern']).toBeTruthy();
  });

  it('should have a restaurante_id field', () => {
    let restaurante_id = component.chefForm.controls['restaurante_id'];
    expect(restaurante_id.value).toEqual(component.chef.restaurante);
  });

  it('should be invalid when restaurante_id is empty', () => {
    let errors = {};
    let restaurante_id = component.chefForm.controls['restaurante_id'];
    restaurante_id.setValue("");
    errors = restaurante_id.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should not have a password field', () => {
    let password = component.chefForm.controls['password'];
    expect(password).toBeUndefined();
  });

});
