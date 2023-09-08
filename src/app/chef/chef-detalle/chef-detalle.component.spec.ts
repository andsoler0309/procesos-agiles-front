import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetalleComponent } from './chef-detalle.component';

describe('ChefDetalleComponent', () => {
  let component: ChefDetalleComponent;
  let fixture: ComponentFixture<ChefDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
