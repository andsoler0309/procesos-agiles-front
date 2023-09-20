/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestauranteEditarComponent } from './restaurante-editar.component';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Restaurante } from '../restaurante';
import { Usuario } from 'src/app/usuario/usuario';

describe('RestauranteEditarComponent', () => {
  let component: RestauranteEditarComponent;
  let fixture: ComponentFixture<RestauranteEditarComponent>;

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
      declarations: [ RestauranteEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(RestauranteEditarComponent);
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

    component.restauranteForm = fb.group({
      nombre: [restaurante.nombre,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]],
      direccion: [restaurante.direccion,[Validators.required, Validators.minLength(2),Validators.maxLength(200)]],
      telefono: [restaurante.telefono,[]],
      tipo_comida: [restaurante.tipo_comida,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]],
      facebook: [restaurante.facebook,[]],
      twitter: [restaurante.twitter,[]],
      instagram: [restaurante.instagram,[]],
      hora_atencion: [restaurante.hora_atencion,[Validators.required, Validators.minLength(2),Validators.maxLength(100)]],
      is_en_lugar: [restaurante.is_en_lugar,[]],
      is_domicilios: [restaurante.is_domicilios,[]],
      is_rappi: [restaurante.is_rappi,[]],
      is_didi: [restaurante.is_didi,[]]
    });

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a defined restauranteForm', () => {
    expect(component.restauranteForm).toBeDefined();
  });

  it('should have a defined restauranteForm.nombre', () => {
    expect(component.restauranteForm.controls['nombre']).toBeDefined();
  });

  it('should be valid when it have the existing restaurant', () => {
    expect(component.restauranteForm.valid).toBeTruthy();
  });

  it('should have a nombre field', () => {
    const nombre = component.restauranteForm.controls['nombre'];
    expect(nombre.value).toEqual('Restaurante 1');
  });

  it('should have a direccion field', () => {
    const direccion = component.restauranteForm.controls['direccion'];
    expect(direccion.value).toEqual('Calle 1');
  });

  it('should have a telefono field', () => {
    const telefono = component.restauranteForm.controls['telefono'];
    expect(telefono.value).toEqual('1234567');
  });

  it('should have a facebook field', () => {
    const facebook = component.restauranteForm.controls['facebook'];
    expect(facebook.value).toEqual('facebook');
  });

  it('should have a twitter field', () => {
    const twitter = component.restauranteForm.controls['twitter'];
    expect(twitter.value).toEqual('twitter');
  });

  it('should have a instagram field', () => {
    const instagram = component.restauranteForm.controls['instagram'];
    expect(instagram.value).toEqual('instagram');
  });

  it('should have a hora_atencion field', () => {
    const hora_atencion = component.restauranteForm.controls['hora_atencion'];
    expect(hora_atencion.value).toEqual('8:00 - 18:00');
  });

  it('should have a is_en_lugar field', () => {
    const is_en_lugar = component.restauranteForm.controls['is_en_lugar'];
    expect(is_en_lugar.value).toEqual(true);
  });

  it('should have a is_domicilios field', () => {
    const is_domicilios = component.restauranteForm.controls['is_domicilios'];
    expect(is_domicilios.value).toEqual(true);
  });

  it('should have a is_rappi field', () => {
    const is_rappi = component.restauranteForm.controls['is_rappi'];
    expect(is_rappi.value).toEqual(true);
  });

  it('should have a is_didi field', () => {
    const is_didi = component.restauranteForm.controls['is_didi'];
    expect(is_didi.value).toEqual(true);
  });

  it('should be invalid when nombre is less than 2 characters', () => {
    let errors = {};
    const nombre = component.restauranteForm.controls['nombre'];
    nombre.setValue("a");
    errors = nombre.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('should be invalid when nombre is empty', () => {
    let errors = {};
    const nombre = component.restauranteForm.controls['nombre'];
    nombre.setValue("");
    errors = nombre.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should be invalid when nombre is more than 100 characters', () => {
    let errors = {};
    const nombre = component.restauranteForm.controls['nombre'];
    nombre.setValue("a".repeat(101));
    errors = nombre.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('should be invalid when direccion is less than 2 characters', () => {
    let errors = {};
    const direccion = component.restauranteForm.controls['direccion'];
    direccion.setValue("a");
    errors = direccion.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('should be invalid when direccion is empty', () => {
    let errors = {};
    const direccion = component.restauranteForm.controls['direccion'];
    direccion.setValue("");
    errors = direccion.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should be invalid when direccion is more than 200 characters', () => {
    let errors = {};
    const direccion = component.restauranteForm.controls['direccion'];
    direccion.setValue("a".repeat(201));
    errors = direccion.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('should be invalid when tipo_comida is less than 2 characters', () => {
    let errors = {};
    const tipo_comida = component.restauranteForm.controls['tipo_comida'];
    tipo_comida.setValue("a");
    errors = tipo_comida.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('should be invalid when tipo_comida is empty', () => {
    let errors = {};
    const tipo_comida = component.restauranteForm.controls['tipo_comida'];
    tipo_comida.setValue("");
    errors = tipo_comida.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should be invalid when tipo_comida is more than 100 characters', () => {
    let errors = {};
    const tipo_comida = component.restauranteForm.controls['tipo_comida'];
    tipo_comida.setValue("a".repeat(101));
    errors = tipo_comida.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });

  it('should be invalid when hora_atencion is less than 2 characters', () => {
    let errors = {};
    const hora_atencion = component.restauranteForm.controls['hora_atencion'];
    hora_atencion.setValue("a");
    errors = hora_atencion.errors || {};
    expect(errors['minlength']).toBeTruthy();
  });

  it('should be invalid when hora_atencion is empty', () => {
    let errors = {};
    const hora_atencion = component.restauranteForm.controls['hora_atencion'];
    hora_atencion.setValue("");
    errors = hora_atencion.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should be invalid when hora_atencion is more than 100 characters', () => {
    let errors = {};
    const hora_atencion = component.restauranteForm.controls['hora_atencion'];
    hora_atencion.setValue("a".repeat(101));
    errors = hora_atencion.errors || {};
    expect(errors['maxlength']).toBeTruthy();
  });
});
