import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSemanaListarComponent } from './menu-semana-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ToastrModule } from 'ngx-toastr';

describe('MenuSemanaListarComponent', () => {
  let component: MenuSemanaListarComponent;
  let fixture: ComponentFixture<MenuSemanaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToastrModule.forRoot(), HttpClientTestingModule, EncabezadoAppModule ],
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
