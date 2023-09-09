import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteDetalleComponent } from './restaurante-detalle.component';
import { RestauranteService } from '../restaurante.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { Usuario } from 'src/app/usuario/usuario';
import { Restaurante } from '../restaurante';

describe('RestauranteDetalleComponent', () => {
  let component: RestauranteDetalleComponent;
  let fixture: ComponentFixture<RestauranteDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule],
      providers: [ RestauranteService ],
      declarations: [ RestauranteDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteDetalleComponent);
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
    component.restaurante = restaurante;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should have a nombre', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#label_nombre')).toBeTruthy();
  });

  it('should have a direccion', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#label_direccion')).toBeTruthy();
  });

  it('should have a telefono', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#label_telefono')).toBeTruthy();
  });

  it('should have a chefs', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#div_chefs')).toBeTruthy();
  });

  it('should have a menus', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#div_menus')).toBeTruthy();
  });


});
