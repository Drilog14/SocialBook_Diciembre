import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  usuario = '';
  contrasena = '';
constructor( private authService: AuthService,
   private router: Router) {

}
loginForm = new FormGroup({
  usuario: new FormControl(''),
  contrasena: new FormControl('')
});

onLogin(): void {
  this.authService.login(this.usuario, this.contrasena)
  .subscribe(
    user => { this.router.navigate(['/home'])}
  )
}
}
