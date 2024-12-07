import { Component, Input, OnInit } from '@angular/core';
// import { Users } from '../../interfaces/hero.intefaces';
import { Libros } from '../../interfaces/libros.interfaces';
import { Resenas } from '../../interfaces/resenas.interfaces';

@Component({
  selector: 'resena-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public resena!: Resenas;




  ngOnInit(): void {
   if (!this.resena) throw new Error('Hero property is required');
  }

}
