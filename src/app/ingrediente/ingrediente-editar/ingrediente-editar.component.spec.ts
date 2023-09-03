/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredienteEditarComponent } from './ingrediente-editar.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ToastrModule } from 'ngx-toastr';
import { Ingrediente } from '../ingrediente';

describe('IngredienteEditarComponent', () => {
  let component: IngredienteEditarComponent;
  let fixture: ComponentFixture<IngredienteEditarComponent>;

  beforeEach(async() => {
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
      declarations: [ IngredienteEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(IngredienteEditarComponent);
    component = fixture.componentInstance;
    component.ingrediente = new Ingrediente(1,"","",0,1,"")

    component.ingredienteForm = fb.group({
        id: [1, []],
        nombre: ["nombre", [Validators.required]],
        unidad: ["1", [Validators.required]],
        costo: [1, Validators.required],
        calorias: [1, Validators.required],
        sitio: ["sitio", [Validators.required]]
    });
   
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});