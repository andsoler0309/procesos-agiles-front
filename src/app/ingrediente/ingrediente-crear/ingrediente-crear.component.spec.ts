/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IngredienteCrearComponent } from './ingrediente-crear.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IngredienteService } from '../ingrediente.service';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';

describe('IngredienteCrearComponent', () => {
  let component: IngredienteCrearComponent;
  let fixture: ComponentFixture<IngredienteCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, ToastrModule.forRoot(), HttpClientTestingModule, EncabezadoAppModule ],
      declarations: [ IngredienteCrearComponent ],
      providers: [ IngredienteService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredienteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
