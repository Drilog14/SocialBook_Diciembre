import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/usuarios.interfaces';
import { Libros } from '../../interfaces/libros.interfaces';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [
  ]
})
export class ListaLibrosComponent implements OnInit {
  @Input()
  public libros!: Libros[]
  public libro!: Libros


  constructor(private adminService: AdminService) {

  }
    ngOnInit(): void {
     this.adminService.getLibros().subscribe(heroes => {
       this.libros = heroes;
     });
    }
    onDeleteHero(titulo: string){

      const libr = titulo
      console.log(libr)

      this.adminService.deleteLibro(titulo)
      .subscribe(libro => {
        console.log('ok')
      });
    }

}
