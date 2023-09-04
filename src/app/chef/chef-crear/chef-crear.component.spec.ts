import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefCrearComponent } from './chef-crear.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ToastrModule } from 'ngx-toastr';

describe('ChefCrearComponent', () => {
  let component: ChefCrearComponent;
  let fixture: ComponentFixture<ChefCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
      declarations: [ ChefCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should have a nombre', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#nombre')).toBeTruthy();
  });

  it('should have a usuario', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#usuario')).toBeTruthy();
  });

  it('should have a contrasena', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#contrasena')).toBeTruthy();
  });

  it('should have a restaurante_id', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#restaurante_id')).toBeTruthy();
  });
});
