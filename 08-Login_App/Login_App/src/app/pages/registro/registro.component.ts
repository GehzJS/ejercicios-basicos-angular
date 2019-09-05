import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario;
  recordar = false;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.usuario = new Usuario();
  }

  enviarDatos(formulario: NgForm) {
    if (formulario.valid) {
      Swal.fire({
        allowOutsideClick: false,
        type: 'info',
        title: 'Espere un momento',
        text: 'Guardando el usuario...'
      });
      Swal.showLoading();
      this.auth.registrarUsuario(this.usuario).subscribe(
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
            text: 'Ha ocurrido un error al intentar guardar el usuario. Inténtelo nuevamente.'
          });
        }
      );
    } else {
      return;
    }
  }
}
