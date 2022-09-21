import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from './user';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL: string = 'http://localhost:8080/api/user'
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}`, user, { headers: this.httpHeaders }).pipe(
      map(user => user as User),
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${e.error.error}`
        })
        return throwError(() => e)
      })
    )
  }

  logUser(user: User): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL}/login`, user, { headers: this.httpHeaders }).pipe(
      map(user => user as User),
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${e.error.error}`
        })
        return throwError(() => e)
      })
    )
  }
}
