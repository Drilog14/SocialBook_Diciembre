import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Libros } from '../../interfaces/libros.interfaces';
import { LibrosService } from '../../services/libros.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {

public searchInput = new FormControl('');
public libros: Libros[] = [];
public selectedLibro?: Libros;
searchQuery: string = '';
constructor(private libroService: LibrosService){}

searchLibro( ) {

 this.libroService.getSuggestions(this.searchQuery).subscribe(
  (libros) =>   this.libros = libros);
  }

  onSelectedOption( event: MatAutocompleteSelectedEvent):void {
if (!event.option.value) {
  this.selectedLibro = undefined;
  return;
  }

  const hero: Libros = event.option.value;
  this.searchInput.setValue(hero.titulo);

  this.selectedLibro = hero;
}
}
