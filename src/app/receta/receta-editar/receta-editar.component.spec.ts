/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecetaEditarComponent } from './receta-editar.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { Receta } from '../receta';
import { Ingrediente } from 'src/app/ingrediente/ingrediente';

describe('RecetaEditarComponent', () => {
  let component: RecetaEditarComponent;
  let fixture: ComponentFixture<RecetaEditarComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports :[
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
      declarations: [ RecetaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(inject([FormBuilder], (fb: FormBuilder) => {
    fixture = TestBed.createComponent(RecetaEditarComponent);
    component = fixture.componentInstance;
  
    component.receta = new Receta(1,"asdasd",1,5,"")
    component.listaIngredientes = []
    component.ingredientesSubForm = fb.array([
      fb.group({
        id: [1, Validators.required],
        nombre: ["", Validators.required],
        cantidad: [1, Validators.required],
        idIngrediente: [1, Validators.required]
      })
//      this.ingredientesSubForm.push(filaNueva)
    ])
    component.recetaForm = fb.group({
      id: [1],
      nombre: ["nombre", [Validators.required, Validators.minLength(2)]],
      duracion: [1, Validators.required],
      porcion: [1, Validators.required],
      ingredientes: fb.array([
        fb.group({
          id: [1, Validators.required],
          nombre: ["", Validators.required],
          cantidad: [1, Validators.required],
          idIngrediente: [1, Validators.required]
        })
      ]),
      preparacion: ["preparacion", [Validators.required, Validators.minLength(2)]]
    });
    fixture.detectChanges();

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
