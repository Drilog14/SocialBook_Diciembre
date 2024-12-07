import { Component, OnInit } from '@angular/core';
// import { Users } from '../../interfaces/hero.intefaces';
import {  LibrosService } from '../../services/libros.service';
import { Libros } from '../../interfaces/libros.interfaces';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

public heroes: Libros[] = [];
genres: string[] = [];
authors: string[] = [];
public minRating:number = 100;
selectedGenre: string = '';
selectedAuthor: string = '';

constructor(private librosService: LibrosService) {
}
  ngOnInit(): void {
   this.librosService.getlibros().subscribe(heroes => {
     this.heroes = heroes;
     this.extractGenres();
     this.extractAuthors();
   });
  }
  extractGenres() {
    // Utiliza 'flatMap' para aplanar los arreglos de géneros y luego filtra los valores nulos
    const allGenres = this.heroes.flatMap(book => book.genero || []).filter(g => g !== null);
    this.genres = Array.from(new Set(allGenres)); // Elimina duplicados y crea la lista de géneros
  }
  extractAuthors() {
    const allAuthors = this.heroes.map(book => book.autor).filter(autor => autor != null)  as string[]; // Filtra autores nulos
    this.authors = Array.from(new Set(allAuthors));
  }

  formatLabel(value: number): string {
    if (value >= 10) {
      return value + 'votos';
    }

    return `${value}`;
  }
}

