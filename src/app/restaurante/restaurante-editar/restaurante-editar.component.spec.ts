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
});
