import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  busqueda: string;

  constructor(private router: Router) {}

  ngOnInit() {}

  buscar(nombre: string) {
    if (nombre.length > 0) {
      this.router.navigate(['/search', nombre]);
    } else {
      return;
    }
  }
}
