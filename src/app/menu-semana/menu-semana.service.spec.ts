import { TestBed } from '@angular/core/testing';

import { MenuSemanaService } from './menu-semana.service';

describe('MenuSemanaService', () => {
  let service: MenuSemanaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSemanaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
