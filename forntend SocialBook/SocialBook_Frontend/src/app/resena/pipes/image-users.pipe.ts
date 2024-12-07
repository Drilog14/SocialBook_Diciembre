import { Pipe, type PipeTransform } from '@angular/core';
import { Resenas } from '../interfaces/resenas.interfaces';
import { Usuarios } from '../interfaces/usuarios.interfaces';


@Pipe({
  name: 'UsersImage',
  standalone: true,
})
export class UsersImagePipe implements PipeTransform {

  transform( user: Usuarios):string {


 return `assets/usuarios/${user.imagen}.png`;
}

}
