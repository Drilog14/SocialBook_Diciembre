import { Pipe, type PipeTransform } from '@angular/core';
import { Resenas } from '../interfaces/resenas.interfaces';


@Pipe({
  name: 'ResenasImage',
  standalone: true,
})
export class ResenasImagePipe implements PipeTransform {

  transform( resenas: Resenas):string {


 return `assets/resenas/${resenas.imagen}.jpg`;
}

}
