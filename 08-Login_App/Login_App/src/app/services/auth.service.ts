import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private API_KEY = 'AIzaSyCdqvMgHA__DgqxsEejjpy6K-yDrvO4ciE';
  token: string;
  // Crear usuario
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Iniciar sesion
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  registrarUsuario(usuario: Usuario) {
    const data = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.URL}signUp?key=${this.API_KEY}`, data).pipe(
      map((respuesta: any) => {
        this.guardarToken(respuesta.idToken);
        return respuesta;
      })
    );
  }

  iniciarSesion(usuario: Usuario) {
    const data = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(`${this.URL}signInWithPassword?key=${this.API_KEY}`, data).pipe(
      map((respuesta: any) => {
        this.guardarToken(respuesta.idToken);
        return respuesta;
      })
    );
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }

  leerToken() {
    const local = this.token = localStorage.getItem('token');
    (local) ? this.token = local : this.token = '';
  }

  guardarToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
    const fecha = new Date();
    fecha.setSeconds(3600);
    localStorage.setItem('expira', fecha.getTime().toString());
  }

  usuarioAutenticado() {
    if (this.token.length > 2) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiracion = new Date();
    expiracion.setTime(expira);
    return (expiracion > new Date()) ? true : false;
  }
}
