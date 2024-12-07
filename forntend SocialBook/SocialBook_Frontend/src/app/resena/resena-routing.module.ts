import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { ResenaPageComponent } from './pages/resena-page/resena-page.component';
import { NewResenaPageComponent } from './pages/new-resena-page/new-resena-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
   {path: 'list', component: ListPageComponent},
   {path: 'new-resena', component: NewResenaPageComponent},

   {path: 'edit/:id', component: NewResenaPageComponent},
   {path: 'search', component: SearchPageComponent},
   {path: ':id', component: ResenaPageComponent},
   {path: '**', redirectTo: 'list' },

    ]
  }
];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResenaRoutingModule { }
