/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { RestauranteListaComponent } from './restaurante-lista.component';
import { Restaurante } from '../restaurante';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestauranteService } from '../restaurante.service';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { Usuario } from 'src/app/usuario/usuario';

describe('RestauranteListaComponent', () => {
  let component: RestauranteListaComponent;
  let fixture: ComponentFixture<RestauranteListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule],
      providers: [ RestauranteService ],
      declarations: [ RestauranteListaComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteListaComponent);
    component = fixture.componentInstance;

    const usuario_test = new Usuario('admin', 'admin');
    component.restaurantes = [
      new Restaurante(
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
        usuario_test
      )
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should have a table with 1 row', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('tr').length).toEqual(1);
  });

  it('should have a nombre column', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th').textContent).toEqual('Nombre');
  });

  it('should have a acciones column', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('th')[1].textContent).toEqual('Acciones');
  });

  it('should have a button with text "Crear restaurante"', () => {
    const compiled = fixture.debugElement.nativeElement;
    const buttons = compiled.querySelectorAll('button');
    // get all buttons with text "Editar"
    const buttonsEditar = Array.from(buttons).filter((button: HTMLButtonElement) => button.textContent === 'Crear restaurante');
    expect(buttonsEditar.length).toEqual(1);
  });
});
