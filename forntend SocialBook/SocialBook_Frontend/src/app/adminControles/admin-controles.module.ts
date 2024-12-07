import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminControlesRoutingModule } from './admin-controles-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { ListaResenasComponent } from './pages/lista-resenas/lista-resenas.component';
import { ListaLibrosComponent } from './pages/lista-libros/lista-libros.component';
import { MaterialModule } from '../material/material.module';
import { LibroImagePipe } from "./pipes/image.pipe";
import { ResenasImagePipe } from "./pipes/image-resenas.pipe";



@NgModule({
    declarations: [
        LayoutPageComponent,
        ListaUsuariosComponent,
        ListaResenasComponent,
        ListaLibrosComponent,
    ],
    imports: [
        CommonModule,
        AdminControlesRoutingModule,
        MaterialModule,
        LibroImagePipe,
        ResenasImagePipe,

    ]
})
export class AdminControlesModule { }
