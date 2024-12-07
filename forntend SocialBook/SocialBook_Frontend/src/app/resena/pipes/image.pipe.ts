import { Pipe, type PipeTransform } from '@angular/core';
import { Libros } from '../interfaces/libros.interfaces';

@Pipe({
  name: 'librosImage',
  standalone: true,
})
export class LibroImagePipe implements PipeTransform {

  transform( hero: Libros):string {
 if (!hero.imagen) {
  return 'assets/noCover.png';
 }
 return `assets/libros/${hero.imagen}.jpg`;
}

}
