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
    return this.http.post<Chef>(`${this.apiUrl}/chefs/${idUsuario}`, chef, { headers: headers })
  }

  traerChefs(): Observable<Chef[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
    return this.http.get<Chef[]>(`${this.apiUrl}/chefs`, { headers: headers })
  }
}
