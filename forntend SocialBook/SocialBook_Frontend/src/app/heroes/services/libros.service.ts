

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
// import { Users } from '../interfaces/hero.intefaces';
import { environments } from 'src/environments/environments';
import { Libros } from '../interfaces/libros.interfaces';
import { Resenas } from '../interfaces/resenas.interfaces';

@Injectable({providedIn: 'root'})
export class LibrosService {

  private baseUrl: string = environments.baseUrl;
  constructor(private httpClient: HttpClient) { }


getlibros():Observable<Libros[]> {

  return this.httpClient.get<Libros[]>(`${this.baseUrl}/libros`)
}



getLibrobyid(id: number):Observable<Libros | undefined> {

 return this.httpClient.get<Libros>(`${this.baseUrl}/libros/${id}`)

}



getSuggestions ( query: string): Observable<Libros[]> {
  return this.httpClient.get<Libros[]>(
  `${this.baseUrl}/libros/buscar`, { params: { query} }
  )

}

addLibro(Libro: Libros):Observable<Libros>{

return this.httpClient.post<Libros>(
 `${ this.baseUrl}/libros`,
 Libro
 )
}

updateLibro(libro: Libros):Observable<Libros>{
  if ( !libro.id) throw Error('Libro id is required');
  return this.httpClient.put<Libros>(
   `${ this.baseUrl}/libros/${libro.id}`,
   libro
   )
  }


    deleteLibro(titulo: string): Observable<boolean> {

      return this.httpClient.delete(
      `${ this.baseUrl}/libros/titulo/${ titulo}`
      ).pipe(

        map(response => true),
        catchError(error => of(false)),
      )
      }


      // resenas

      getResenas():Observable<Resenas[]> {

        return this.httpClient.get<Resenas[]>(`${this.baseUrl}/resenas`)
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

}
