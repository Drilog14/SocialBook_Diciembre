import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  LibrosService } from '../../services/libros.service';
import { Libros } from '../../interfaces/libros.interfaces';
// import { ID } from '../../interfaces/libros.interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({

    titulo: new FormControl<string>('', {nonNullable: true}),
    autor: new FormControl<string>(''),
    imagen: new FormControl<string>(''),
    resumen: new FormControl<string>(''),
    genero: new FormControl<string[]>(['']),
    editorial: new FormControl<string>(''),
    fecha: new FormControl<string>(''),
    paginas: new FormControl<number>(1),
    valoracion: new FormControl<number>(0),

  });






  public publishers = [
    { id: 'Editorial1', desc: 'Debolsillo' },
    { id: 'Editorial2', desc: 'Tapa blanda' },
    { id: 'Editorial3', desc: 'Tapa dura' },
  ];

  constructor ( private librosService: LibrosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  get currentLibro(): Libros {
 const libro = this.heroForm.value as Libros;

 return libro;
  }

  ngOnInit(): void {
 if(!this.router.url.includes('edit')) return;

 this.activatedRoute.params
 .pipe(
  switchMap(({id}) => this.librosService.getLibrobyid(id)),
 ).subscribe(libro => {
  if (!libro) return this.router.navigateByUrl('/');
  this.heroForm.reset(libro);
 return;
 });


  }

onSubmit(): void {
  if (this.heroForm.invalid) return;

  if ( this.currentLibro.id) {
    this.librosService.updateLibro(this.currentLibro)
  .subscribe( (libro) => { this.showSnackbar(`${ libro.titulo} updated!`


  )}
)
;

return
}

this.librosService.addLibro(this.currentLibro)
.subscribe(libro => {

  this.showSnackbar(`${ libro.titulo} created!`)
  this.router.navigate(['/heroes']);
});
}


onDeleteHero(){

  const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    data: this.heroForm.value,
  });

dialogRef.afterClosed()
.pipe(
  filter(result => result === true),
  switchMap(() => this.librosService.deleteLibro(this.currentLibro.titulo)),
  filter(wasDeleted => wasDeleted),
).subscribe(() => {
  this.router.navigate(['/heroes']);
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
