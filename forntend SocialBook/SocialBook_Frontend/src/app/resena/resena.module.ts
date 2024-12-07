import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResenaRoutingModule } from './resena-routing.module';
import { ResenaPageComponent } from './pages/resena-page/resena-page.component';
import { NewResenaPageComponent } from './pages/new-resena-page/new-resena-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ResenasImagePipe } from "./pipes/image-resenas.pipe";
import { LibroImagePipe } from "./pipes/image.pipe";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ResenaPageComponent,
        NewResenaPageComponent,
        LayoutPageComponent,
        SearchPageComponent,
        ListPageComponent,
        CardComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        CommonModule,
        ResenaRoutingModule,
        MaterialModule,
        ResenasImagePipe,
        LibroImagePipe,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ResenaModule { }
