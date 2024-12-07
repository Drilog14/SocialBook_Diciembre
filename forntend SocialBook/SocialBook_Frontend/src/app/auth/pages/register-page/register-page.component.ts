import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Usuarios } from '../../interfaces/usuarios.interfaces';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  usuario = '';
  contrasena = '';

  constructor( private authService: AuthService,
    private router: Router) {

 }
  registroForm = new FormGroup({
    usuario: new FormControl('', [Validators.required, Validators.minLength(4)]),
    nombre: new FormControl('', Validators.required),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  crearCuenta() {
    if (this.registroForm.valid) {
      this.authService.addLibro(this.currentLibro)
      this.authService.login(this.usuario, this.contrasena)
      .subscribe(() => {
        this.router.navigate(['/home']);
      });
      }   // Aquí manejarías la lógica para crear la cuenta

  }
  get currentLibro(): Usuarios {
    const libro = this.registroForm.value as Usuarios;

    return libro;
     }
}
