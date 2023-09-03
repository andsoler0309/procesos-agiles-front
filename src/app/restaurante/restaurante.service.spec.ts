/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RestauranteService } from './restaurante.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteListaComponent } from './restaurante-lista/restaurante-lista.component';
import { ToastrModule } from 'ngx-toastr';
import { Restaurante } from './restaurante';
import { Usuario } from '../usuario/usuario';

describe('Service: Restaurante', () => {
  let service: RestauranteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, ToastrModule.forRoot()],
      providers: [RestauranteService],
      declarations: [RestauranteListaComponent, AppComponent]
    });
    service = TestBed.inject(RestauranteService);
  });

  it('should ...', inject([RestauranteService], (service: RestauranteService) => {
    expect(service).toBeTruthy();
  }));

  it('Should create restaurante from Http post call.',  inject([RestauranteService],(service: RestauranteService)  => {
    service.crearRestaurante(
      new Restaurante(0, "", "", "","","","","",true,true,"",true, true, new Usuario("",""))
    )
      .subscribe({
        next: (response) => {
          expect(response).toBeTruthy();
        }
      });
  }));

});
