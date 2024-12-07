import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFirstRoutingModule } from './home-first-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeFirstRoutingModule,
    MaterialModule
  ]
})
export class HomeFirstModule { }
