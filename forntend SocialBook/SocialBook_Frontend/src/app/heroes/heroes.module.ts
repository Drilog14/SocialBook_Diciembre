import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { LibroImagePipe } from "./pipes/image.pipe";
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ResenasImagePipe } from "./pipes/image-resenas.pipe";
import { FormsModule } from '@angular/forms';
import { FilterByRatingPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        HeroPageComponent,
        LayoutPageComponent,
        ListPageComponent,
        NewPageComponent,
        SearchPageComponent,
        CardComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        LibroImagePipe,
        ResenasImagePipe,
        FormsModule,
        FilterByRatingPipe


    ]
})
export class HeroesModule { }
