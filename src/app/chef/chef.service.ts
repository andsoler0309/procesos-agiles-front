import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment'
import { Chef } from './chef';


@Injectable({
  providedIn: 'root'
})
export class ChefService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  crearChef(chef: Chef): Observable<Chef> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.post<Chef>(`${this.apiUrl}/chef/${idUsuario}`, chef, { headers: headers })
  }

  traerChefs(): Observable<Chef[]> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Chef[]>(`${this.apiUrl}/chefs/${idUsuario}`, { headers: headers })
  }

  obtenerChef(id_chef: number): Observable<Chef> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Chef>(`${this.apiUrl}/chef/${idUsuario}/${id_chef}`, { headers: headers })
  }

  editarChef(chef: Chef): Observable<Chef> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.put<Chef>(`${this.apiUrl}/chef/${idUsuario}/${chef.id}`, chef, { headers: headers })
  }

  borrarChef(chefId: Number): Observable<Chef> {
    const idUsuario = sessionStorage.getItem('idUsuario');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.delete<Chef>(`${this.apiUrl}/chef/${idUsuario}/${chefId}`, { headers: headers })
  }
}
