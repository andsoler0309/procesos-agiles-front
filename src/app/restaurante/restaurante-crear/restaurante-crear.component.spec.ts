import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCrearComponent } from './restaurante-crear.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { RestauranteService } from '../restaurante.service';
import { Usuario } from 'src/app/usuario/usuario';
import { Restaurante } from '../restaurante';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RestauranteCrearComponent', () => {
  let component: RestauranteCrearComponent;
  let fixture: ComponentFixture<RestauranteCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule, FormsModule, ReactiveFormsModule],
      providers: [ RestauranteService ],
      declarations: [ RestauranteCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteCrearComponent);
    component = fixture.componentInstance;
    const usuario_test = new Usuario('admin', 'admin');
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

  it('should have a direccion', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#direccion')).toBeTruthy();
  });

  it('should have a telefono', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#telefono')).toBeTruthy();
  });

  it('should have a facebook', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#facebook')).toBeTruthy();
  });

  it('should have a twitter', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#twitter')).toBeTruthy();
  });

  it('should have a instagram', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#instagram')).toBeTruthy();
  });

  it('should have a hora_atencion', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#hora_atencion')).toBeTruthy();
  });

  it('should have a is_en_lugar', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#is_en_lugar')).toBeTruthy();
  });

  it('should have a is_domicilios', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#is_domicilios')).toBeTruthy();
  });

  it('should have a tipo_comida', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#tipo_comida')).toBeTruthy();
  });

  it('should have a is_rappi', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#is_rappi')).toBeTruthy();
  });

  it('should have a is_didi', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#is_didi')).toBeTruthy();
  });







});
