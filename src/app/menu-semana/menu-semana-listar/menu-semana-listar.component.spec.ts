import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSemanaListarComponent } from './menu-semana-listar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncabezadoAppModule } from 'src/app/encabezado-app/encabezado-app.module';
import { ToastrModule } from 'ngx-toastr';
import { MenuSemanaService } from '../menu-semana.service';
import { Usuario } from 'src/app/usuario/usuario';
import { InfoUsuario, MenuSemana } from '../menu-semana';

describe('MenuSemanaListarComponent', () => {
  let component: MenuSemanaListarComponent;
  let fixture: ComponentFixture<MenuSemanaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ToastrModule.forRoot(), HttpClientTestingModule, EncabezadoAppModule ],
      providers: [MenuSemanaService],
      declarations: [ MenuSemanaListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSemanaListarComponent);
    component = fixture.componentInstance;
    const usuario_test = new InfoUsuario(
      'nombreUsuario',
      'admin',
    )
    component.menus = [
      new MenuSemana(
        'menu1',
        '2023-09-07',
        '2023-09-13',
        Array(1),
        1,
        usuario_test
      ),
      new MenuSemana(
        'menu2',
        '2023-09-07',
        '2023-09-13',
        Array(1),
        1,
        usuario_test
      ),
    ];        
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeTruthy();
  });

  it('should have a table with 2 rows', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('tr').length).toEqual(2);
  });

  it('should have a nombre column', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('th').textContent).toEqual('Fecha Inicio');
  });

});
