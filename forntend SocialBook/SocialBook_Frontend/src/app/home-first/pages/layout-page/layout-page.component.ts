import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    {label: 'Listado de libros', icon: 'label', url: '../heroes/list'},
    {label: 'Listado de reseñas', icon: 'label', url: '../resenas/list'},

  ]
  constructor( private authService: AuthService,
    private router: Router
  ) {}
  onLogout() {
    this.authService.logout()
    this.router.navigate(['/auth'])
      }
}
