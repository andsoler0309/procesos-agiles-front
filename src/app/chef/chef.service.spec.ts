import { TestBed, async, inject } from '@angular/core/testing';
import { ChefService } from './chef.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Chef } from './chef';

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

  it('Should return chef id from Http post call.',  inject([ChefService],(service: ChefService)  => {
    service.crearChef(
      new Chef(0, "", "", "")
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