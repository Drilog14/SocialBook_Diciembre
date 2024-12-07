import { ResenasService } from './../../services/resena.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Libros } from '../../interfaces/libros.interfaces';
// import { ID } from '../../interfaces/libros.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Resenas } from '../../interfaces/resenas.interfaces';
import { Usuarios } from '../../interfaces/usuarios.interfaces';

@Component({
  selector: 'app-new-resena-page',
  templateUrl: './new-resena-page.component.html',
  styleUrls: ['./new-resena-page.component.css']
})
export class NewResenaPageComponent implements OnInit{

  public resenaForm = new FormGroup({

    titulo: new FormControl<string>('', {nonNullable: true}),
    imagen: new FormControl<string>(''),
    opinion: new FormControl<string>(''),
    usuario: new FormControl<number>(1),
    id_libro: new FormControl<number>(1),
    fecha: new FormControl<string>(''),
    libro_titulo: new FormControl<string>(''),
    votos: new FormControl<number>(10),
  });



  public publishers = [
    { id: 'resena1', desc: 'resena1' },
    { id: 'resena2', desc: 'resena2' },
    { id: 'resena3', desc: 'resena3' },
    { id: 'resena4', desc: 'resena4' },
    { id: 'resena5', desc: 'resena5' },

  ];

  constructor ( private resenaService: ResenasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  get currentResena(): Resenas {
 const libro = this.resenaForm.value as Resenas;

 return libro;
  }

  ngOnInit(): void {
 if(!this.router.url.includes('edit')) return;

 this.activatedRoute.params
 .pipe(
  switchMap(({id}) => this.resenaService.getResenasbyid(id)),
 ).subscribe(libro => {
  if (!libro) return this.router.navigateByUrl('/resenas');
  this.resenaForm.reset(libro);
 return;
 });


  }

onSubmit(): void {
  if (this.resenaForm.invalid) return;

  if ( this.currentResena.id) {
    this.resenaService.updateResenas(this.currentResena)
  .subscribe( (libro) => { this.showSnackbar(`Reseña updated!`


  )}
)
;

return
}

this.resenaService.addResenas(this.currentResena)
.subscribe(libro => {

  this.showSnackbar(`Reseña created!`)
  this.router.navigate(['/resenas']);
});
}


onDeleteHero(){

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: this.resenaForm.value,
  });

dialogRef.afterClosed()
.pipe(
  filter(result => result === true),
  switchMap(() => this.resenaService.deleteResenas(this.currentResena.titulo)),
  filter(wasDeleted => wasDeleted),
).subscribe(() => {
  this.router.navigate(['/resenas']);
})

  // dialogRef.afterClosed().subscribe(result => {
  //   if (!result) return;

  //   this.librosService.deleteLibro(this.currentLibro.titulo)
  //   .subscribe( wasDeleted => {
  //     if (wasDeleted)
  //      this.router.navigate(['/heroes']);
  //   })

  // });

}






showSnackbar(message: string):void {
  this.snackbar.open(message, 'done', {
    duration: 2500,
  })
}
}

