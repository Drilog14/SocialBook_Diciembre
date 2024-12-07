import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate:[AuthGuard],
    canMatch: [AuthGuard]
  },

  {
    path: 'resenas',
    loadChildren: () => import('./resena/resena.module').then(m => m.ResenaModule)
  ,canActivate:[AuthGuard],
  canMatch: [AuthGuard]
  },
  {
    path: 'adminControles',
    loadChildren: () => import('./adminControles/admin-controles.module').then(m => m.AdminControlesModule)
    ,canActivate:[AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./home-first/home-first.module').then(m => m.HomeFirstModule)
  },

  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
