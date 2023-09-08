import { TestBed, async, inject } from '@angular/core/testing';

import { MenuSemanaService } from './menu-semana.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MenuSemana } from './menu-semana';

describe('MenuSemanaService', () => {
  let service: MenuSemanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [MenuSemanaService]
    });
    service = TestBed.inject(MenuSemanaService);
  });

  it('should be created', inject([MenuSemanaService], (service: MenuSemanaService) => {
    expect(service).toBeTruthy();
  }));

  it('Should create chef from Http post call.',  inject([MenuSemanaService],(service: MenuSemanaService)  => {
    service.crearMenuSemana(
      new MenuSemana('menu6', '2023-09-07', '2023-09-13',Array(1) , 1, null)
    )
      .subscribe({
        next: (response) => {
          expect(response).toBeTruthy();
        }
      });
  }));
});
