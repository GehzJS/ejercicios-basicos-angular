import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  recordar = false;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.usuario = new Usuario();
    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.recordar = true;
    }
  }

  enviarDatos(formulario: NgForm) {
    if (formulario.valid) {
      Swal.fire({
        allowOutsideClick: false,
        type: 'info',
        title: 'Espere un momento',
        text: 'Iniciando sesión...'
      });
      Swal.showLoading();
      this.auth.iniciarSesion(this.usuario).subscribe(
        respuesta => {
          Swal.close();
          if (this.recordar) {
            localStorage.setItem('email', this.usuario.email);
          }
          this.router.navigateByUrl('/home');
        }, errores => {
          Swal.fire({
            allowOutsideClick: false,
            type: 'error',
            title: '¡Error!',
            text: 'Ha ocurrido un error al intentar iniciar sesión. Inténtelo nuevamente.'
          });
        }
      );
    } else {
      return;
    }
  }
}
