import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListaLibrosComponent } from './pages/lista-libros/lista-libros.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { ListaResenasComponent } from './pages/lista-resenas/lista-resenas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'lista-libros',
       component: ListaLibrosComponent
      },
      {
        path: 'lista-resenas',
       component: ListaResenasComponent
      },
      {
        path: 'lista-usuarios',
       component: ListaUsuariosComponent
      },
      {path :'**', redirectTo: 'lista-libros'},

    ]

  }
];
@NgModule({
  imports: [ RouterModule.forChild( routes)],
  exports: [RouterModule],

})
export class AdminControlesRoutingModule { }
