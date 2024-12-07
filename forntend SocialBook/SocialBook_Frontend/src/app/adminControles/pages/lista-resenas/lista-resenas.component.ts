import { Component, Input, OnInit } from '@angular/core';
import { Resenas } from '../../interfaces/resenas.interfaces';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-lista-resenas',
  templateUrl: './lista-resenas.component.html',
  styles: [
  ]
})
export class ListaResenasComponent implements OnInit {
  @Input()
  public libros!: Resenas[]
  public libro!: Resenas


  constructor(private adminService: AdminService) {

  }
    ngOnInit(): void {
     this.adminService.getResenas().subscribe(heroes => {
       this.libros = heroes;
     });
    }
    onDeleteHero(titulo: string){

      const libr = titulo
      console.log(libr)

      this.adminService.deleteResenas(titulo)
      .subscribe(libro => {
        console.log('ok')
      });
    }



}
