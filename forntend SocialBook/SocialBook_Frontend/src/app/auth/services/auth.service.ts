import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { Usuarios } from '../interfaces/usuarios.interfaces';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

private baseUrl = environments.baseUrl;
private user?: Usuarios;



  constructor(private http: HttpClient) { }

  get currentUser():Usuarios| undefined {
if (!this.user) return undefined;
return structuredClone (this.user)
  }

  login(correo: string, password: string):Observable<Usuarios> {

return this.http.get<Usuarios>(`${this.baseUrl}/usuarios/1`)
.pipe(
  tap( user =>
    this.user = user),
    tap( user =>
      localStorage.setItem('token', user.id.toString())),
);

  }

  checkAuthentication():Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token')
return this.http.get<Usuarios>(`${this.baseUrl}/usuarios/1`)
.pipe(
  tap( user => this.user = user),
  map( user =>  !!user),
  catchError(err => of(false))
)
  }

  logout ( ) {
    this.user = undefined;
    localStorage.clear();
  }
  addLibro(Usuario: Usuarios):Observable<Usuarios>{

    return this.http.post<Usuarios>(
     `${ this.baseUrl}/usuarios`,
     Usuario
     )
    }

}
