import { TestBed, async, inject } from '@angular/core/testing';
import { ChefService } from './chef.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Chef } from './chef';
import { Restaurante } from '../restaurante/restaurante';
import { Usuario } from '../usuario/usuario';

describe('ChefService', () => {
  let service: ChefService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChefService]
    });
    service = TestBed.inject(ChefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should create chef from Http post call.',  inject([ChefService],(service: ChefService)  => {
    const usuario_test = new Usuario('admin', 'admin');
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
      usuario_test
    )

    service.crearChef(
      new Chef(0, "", "", restaurante)
    )
      .subscribe({
        next: (response) => {
          expect(response).toBeTruthy();
        }
      });
  }));

 /* it('Should return gchefenre by id from Http Get call.',  inject([GenreService],(service: GenreService)  => {
    service.getGenre("123")
      .subscribe({
        next: (response) => {
          expect(response).toBeTruthy();
        }
      });
  }));*/
});
