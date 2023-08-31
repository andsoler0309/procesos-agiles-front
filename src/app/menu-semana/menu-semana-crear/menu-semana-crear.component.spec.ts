import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSemanaCrearComponent } from './menu-semana-crear.component';

describe('MenuSemanaCrearComponent', () => {
  let component: MenuSemanaCrearComponent;
  let fixture: ComponentFixture<MenuSemanaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSemanaCrearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSemanaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
