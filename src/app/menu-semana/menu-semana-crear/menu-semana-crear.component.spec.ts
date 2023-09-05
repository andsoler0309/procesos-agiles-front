import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSemanaCrearComponent } from './menu-semana-crear.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';

describe('MenuSemanaCrearComponent', () => {
  let component: MenuSemanaCrearComponent;
  let fixture: ComponentFixture<MenuSemanaCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, ToastrModule.forRoot(), HttpClientTestingModule, EncabezadoAppModule ],
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
