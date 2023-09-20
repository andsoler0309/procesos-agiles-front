import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ToastrModule } from 'ngx-toastr';
import { MenuSemanaDetalleComponent } from './menu-semana-detalle.component';
import { InfoUsuario, MenuSemanaDetalle } from '../menu-semana';
import { Receta } from 'src/app/receta/receta';

describe('MenuSemanaDetalleComponent', () => {
  let component: MenuSemanaDetalleComponent;
  let fixture: ComponentFixture<MenuSemanaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToastrModule.forRoot(), HttpClientTestingModule, EncabezadoAppModule ],
      declarations: [ MenuSemanaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSemanaDetalleComponent);
    component = fixture.componentInstance;

    const recetas: Receta[] = [
      new Receta(
        1,
        'Receta 1',
        123,
        123,
        'Preparacion 1'
      ),
    ];
    component.menuDetalle = new MenuSemanaDetalle(
      'menu1',
      '2023-09-07',
      '2023-09-13',
      recetas,
      1,
      new  InfoUsuario(
        'nombreUsuario',
        'admin',
      )
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
