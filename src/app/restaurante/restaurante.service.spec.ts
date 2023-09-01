/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { RestauranteService } from './restaurante.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from '../app.component';
import { HttpClientModule } from '@angular/common/http';
import { RestauranteListaComponent } from './restaurante-lista/restaurante-lista.component';
import { ToastrModule } from 'ngx-toastr';
import { Restaurante } from './restaurante';

describe('Service: Restaurante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, ToastrModule.forRoot()],
      providers: [RestauranteService],
      declarations: [RestauranteListaComponent, AppComponent]
    });
  });

  it('should ...', inject([RestauranteService], (service: RestauranteService) => {
    expect(service).toBeTruthy();
  }));
});
