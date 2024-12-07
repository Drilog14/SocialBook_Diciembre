import { Component, Input } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios.interfaces';
import { AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styles: [
  ]
})
export class ListaUsuariosComponent {
  @Input()
  public users!: Usuarios[]
  public user!: Usuarios


  constructor(private adminService: AdminService) {

  }
    ngOnInit(): void {
     this.adminService.getUsers().subscribe(heroes => {
       this.users = heroes;
     });
    }
    onDeleteHero(titulo: string){

      const libr = titulo
      console.log(libr)

      this.adminService.deleteUsuario(titulo)
      .subscribe(libro => {
        console.log('ok')
      });
    }
}
