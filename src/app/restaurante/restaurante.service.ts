import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { Restaurante } from './restaurante';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {
  private apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  traerRestaurantes(): Observable<Restaurante[]> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Restaurante[]>(`${this.apiUrl}/restaurantes/${idUsuario}`, { headers: headers })
  }

  crearRestaurante( restaurante: Restaurante): Observable<Restaurante> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.post<Restaurante>(`${this.apiUrl}/restaurantes/${idUsuario}`,restaurante, { headers: headers })
  }

  obtenerRestaurante(id_restaurante: number): Observable<Restaurante> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Restaurante>(`${this.apiUrl}/restaurantes/${idUsuario}/${id_restaurante}`, { headers: headers })
  }
}
