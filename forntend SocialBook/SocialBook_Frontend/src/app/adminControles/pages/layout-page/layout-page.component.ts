import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuarios } from '../../interfaces/usuarios.interfaces';

@Component({
  selector: 'app-admin-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label: 'Libros', icon: 'label', url: './lista-libros'},
    {label: 'Usuarios', icon: 'label', url: './lista-usuarios'},
    {label: 'Reseñas', icon: 'label', url: './lista-resenas'},
  ]
  constructor( private authService: AuthService,
    private router: Router
  ) {}



  onLogout() {
this.authService.logout()
this.router.navigate(['/auth'])
  }
}
