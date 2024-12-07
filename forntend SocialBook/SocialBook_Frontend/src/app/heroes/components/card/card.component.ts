import { Component, Input, OnInit } from '@angular/core';
// import { Users } from '../../interfaces/hero.intefaces';
import { Libros } from '../../interfaces/libros.interfaces';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public hero!: Libros;




  ngOnInit(): void {
   if (!this.hero) throw new Error('Hero property is required');
  }

}
