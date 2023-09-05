/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChefListaComponent } from './chef-lista.component';
import { Chef } from '../chef';
import { ChefService } from '../chef.service';
import { ToastrModule } from 'ngx-toastr';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { Usuario } from 'src/app/usuario/usuario';
import { Restaurante } from 'src/app/restaurante/restaurante';

describe('ChefListaComponent', () => {
  let component: ChefListaComponent;
  let fixture: ComponentFixture<ChefListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule],
      providers: [ ChefService ],
      declarations: [ ChefListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefListaComponent);
    component = fixture.componentInstance;

    const usuario_test = new Usuario('admin', 'admin');
    const restaurante_test = new Restaurante(
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

    component.chefs = [
      new Chef(1, 'Chef 1', 'Apellido 1', restaurante_test),
      new Chef(2, 'Chef 2', 'Apellido 2', restaurante_test),
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

  it('should have a table with 2 rows', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('tr').length).toEqual(2);
  });

  it('should have a nombre column', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th').textContent).toEqual('Nombre');
  });

  it('should have a restaurante column', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('th')[1].textContent).toEqual('Restaurante');
  });

});
