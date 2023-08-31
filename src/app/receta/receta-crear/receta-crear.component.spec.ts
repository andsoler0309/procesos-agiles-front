/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecetaCrearComponent } from './receta-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';

describe('RecetaCrearComponent', () => {
  let component: RecetaCrearComponent;
  let fixture: ComponentFixture<RecetaCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, ToastrModule.forRoot(), HttpClientTestingModule, EncabezadoAppModule ],
      declarations: [ RecetaCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
