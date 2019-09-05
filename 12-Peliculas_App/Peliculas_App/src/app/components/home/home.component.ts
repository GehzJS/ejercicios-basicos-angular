import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  disponibles: any[] = [];
  adultos: any[] = [];
  ninos: any[] = [];
  mejores: any[] = [];
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.getAvailables().subscribe((disponibles: any) => {
      this.disponibles = disponibles;
    });
    this.peliculasService.getAdultMovies().subscribe((ninos: any) => {
      this.ninos = ninos;
    });
    this.peliculasService.getKidMovies().subscribe((adultos: any) => {
      this.adultos = adultos;
    });
    this.peliculasService.getBOTY().subscribe((mejores: any) => {
      this.mejores = mejores;
    });
  }
}
