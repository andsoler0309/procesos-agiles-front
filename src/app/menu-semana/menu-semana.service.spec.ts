import { TestBed, async, inject } from '@angular/core/testing';

import { MenuSemanaService } from './menu-semana.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
});
