import { Component, OnInit } from '@angular/core';
import { ResenasService } from '../../services/resena.service';
import { Resenas } from '../../interfaces/resenas.interfaces';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  public resenas: Resenas[] = [];

  constructor(private resenasService: ResenasService) {

  }
    ngOnInit(): void {
     this.resenasService.getResenas().subscribe(resenas => {
       this.resenas = resenas;
     });
    }
  }



