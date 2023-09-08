import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { MenuSemana } from './menu-semana';
@Injectable({
  providedIn: 'root'
})
export class MenuSemanaService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  crearMenuSemana(menuSemana: MenuSemana): Observable<MenuSemana> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.post<MenuSemana>(`${this.apiUrl}/menu-semana/${sessionStorage.getItem("idUsuario")}`, menuSemana, { headers: headers })
  }

  traerMenuSemana(): Observable<MenuSemana[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<MenuSemana[]>(`${this.apiUrl}/menu-semana/${sessionStorage.getItem("idUsuario")}`, { headers: headers })
  }
}
