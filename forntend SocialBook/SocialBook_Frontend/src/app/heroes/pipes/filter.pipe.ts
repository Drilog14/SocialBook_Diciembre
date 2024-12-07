import { Pipe, PipeTransform } from '@angular/core';
import { Libros } from '../interfaces/libros.interfaces';

@Pipe({
  name: 'filterByRating',
  standalone: true,

})
export class FilterByRatingPipe implements PipeTransform {
  transform(books: Libros[], minRating: number, genre?: string,  author?: string): Libros[] {
    if (!books) return [];
    let filteredBooks = books.filter(book => book.valoracion !== null && book.valoracion >= minRating);
    if (genre && genre !== "") {
      filteredBooks = filteredBooks.filter(book =>
        book.genero && book.genero.includes(genre)
      );
    }
    if (author && author !== "") {
      filteredBooks = filteredBooks.filter(book =>
        book.autor && book.autor.includes(author)
      );
    }
    return filteredBooks;
}

}
