import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetalleComponent } from './chef-detalle.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ChefService } from '../chef.service';
import { Chef } from '../chef';
import { Restaurante } from 'src/app/restaurante/restaurante';
import { Usuario } from 'src/app/usuario/usuario';

describe('ChefDetalleComponent', () => {
  let component: ChefDetalleComponent;
  let fixture: ComponentFixture<ChefDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot(), EncabezadoAppModule],
      providers: [ ChefService ],
      declarations: [ ChefDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefDetalleComponent);
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
    component.chef = new Chef(
      1, 
      'Chef 1', 
      'Apellido 1', 
      restaurante
    ),

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
