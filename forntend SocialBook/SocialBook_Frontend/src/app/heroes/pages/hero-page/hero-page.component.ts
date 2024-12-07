import { Component, OnInit } from '@angular/core';
import {  LibrosService } from '../../services/libros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Libros } from '../../interfaces/libros.interfaces';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {

public hero? : Libros


 constructor(
  private librosService: LibrosService,
  private activatedRoute: ActivatedRoute,
  private router: Router,
 ) { }



  ngOnInit(): void {
   this.activatedRoute.params.pipe(
    delay(2000),
    switchMap(({id}) => this.librosService.getLibrobyid(id)),
   )
   .subscribe(hero => {
    if(!hero) return this.router.navigate(['/heroes/list']);
    this.hero = hero;
    return;
  });




}

  goBack(): void {
    this.router.navigateByUrl('heroes/list');
  }

}
