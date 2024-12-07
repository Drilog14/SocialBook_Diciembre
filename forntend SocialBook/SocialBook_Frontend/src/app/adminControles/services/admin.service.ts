

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
// import { Users } from '../interfaces/hero.intefaces';
import { environments } from 'src/environments/environments';
import { Libros } from '../interfaces/libros.interfaces';
import { Usuarios } from '../interfaces/usuarios.interfaces';
import { Resenas } from '../interfaces/resenas.interfaces';

@Injectable({providedIn: 'root'})
export class AdminService {

  private baseUrl: string = environments.baseUrl;
  constructor(private httpClient: HttpClient) { }

getLibros():Observable<Libros[]> {

  return this.httpClient.get<Libros[]>(`${ this.baseUrl}/libros`)
}

getUsers():Observable<Usuarios[]> {

  return this.httpClient.get<Usuarios[]>(`${ this.baseUrl}/usuarios`)
}



getHeroById(id: string):Observable<Libros | undefined> {
 return this.httpClient.get<Libros>(`${ this.baseUrl}/libros/${id}`)
 .pipe(
  catchError(error => of(undefined))
 )
}


addLibro(Libro: Libros):Observable<Libros>{
  console.log("libro: " +Libro.titulo)
return this.httpClient.post<Libros>(
 `${ this.baseUrl}/api/libros`,
 Libro
 )
}

updateLibro(libro: Libros):Observable<Libros>{
  if ( !libro.id) throw Error('Libro id is required');
  return this.httpClient.patch<Libros>(
   `${ this.baseUrl}/api/libros/${ libro.id}`,
   libro
   )
  }


  deleteLibro(titulo: string): Observable<boolean> {
    return this.httpClient.delete(
     `${ this.baseUrl}/api/libros/titulo/${titulo}`
     ).pipe(

      map(response => true),
       catchError(error => of(false)),
     )
    }

     // resenas


 getResenas():Observable<Resenas[]> {

  return this.httpClient.get<Resenas[]>(`${this.baseUrl}/resenas/libro`)
}



    getResenasbyid(id: number):Observable<Resenas | undefined> {

      return this.httpClient.get<Resenas>(`${this.baseUrl}/resenas/${id}`)

     }



    getSuggestionsResenas ( query: string): Observable<Resenas[]> {
      return this.httpClient.get<Resenas[]>(
      `${this.baseUrl}/resenas/buscar`, { params: { query} }
      )

    }

    addResenas(Libro: Resenas):Observable<Resenas>{

    return this.httpClient.post<Resenas>(
     `${ this.baseUrl}/resenas`,
     Libro
     )
    }

    updateResenas(libro: Resenas):Observable<Resenas>{
      if ( !libro.id) throw Error('Libro id is required');
      return this.httpClient.patch<Resenas>(
       `${ this.baseUrl}/resenas/${ libro.id}`,
       libro
       )
      }


      deleteResenas(titulo: string): Observable<boolean> {

        return this.httpClient.delete(
        `${ this.baseUrl}/resenas/titulo/${ titulo}`
        ).pipe(

          map(response => true),
          catchError(error => of(false)),
        )
        }

        deleteUsuario(correo: string): Observable<boolean> {

          return this.httpClient.delete(
          `${ this.baseUrl}/usuarios/correo/${ correo}`
          ).pipe(

            map(response => true),
            catchError(error => of(false)),
          )
          }

}
