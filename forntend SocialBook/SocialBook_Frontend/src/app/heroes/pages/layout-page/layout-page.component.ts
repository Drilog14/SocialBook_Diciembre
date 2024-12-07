import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuarios } from '../../interfaces/usuarios.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'Listado', icon: 'label', url: './list'},
    {label: 'Añadir', icon: 'add', url: './new-hero'},

  ]

  constructor( private authService: AuthService,
    private router: Router
  ) {}

get user():Usuarios | undefined {
  return this.authService.currentUser
}

  onLogout() {
this.authService.logout()
this.router.navigate(['/auth'])
  }
}
