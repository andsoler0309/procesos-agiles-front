import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSemanaListarComponent } from './menu-semana-listar.component';

describe('MenuSemanaListarComponent', () => {
  let component: MenuSemanaListarComponent;
  let fixture: ComponentFixture<MenuSemanaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSemanaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSemanaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
