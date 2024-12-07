import { Component, OnInit } from '@angular/core';
import { Libros } from '../../interfaces/libros.interfaces';
import { Resenas } from '../../interfaces/resenas.interfaces';
import { ResenasService } from '../../services/resena.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-resena-page',
  templateUrl: './resena-page.component.html',
  styleUrls: ['./resena-page.component.css']
})
export class ResenaPageComponent implements OnInit {
  public resena? : Resenas

  public resenas: Resenas[] = [];
   constructor(
    private heroesService: ResenasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
   ) { }

 ngOnInit(): void {

  this.activatedRoute.params.pipe(
   delay(2000),
   switchMap(({id}) => this.heroesService.getResenasbyid(id)),
  )
  .subscribe(hero => {
   if(!hero) return this.router.navigate(['/resenas/list']);
   this.resena = hero;
   return;
 });




}

 goBack(): void {
   this.router.navigateByUrl('resenas/list');
 }

}
