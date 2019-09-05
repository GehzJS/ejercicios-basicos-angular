import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  pelicula: object = {};

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculasService,
    public location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe((parametros: any) => {
      this.peliculaService
        .getMovie(parametros.id)
        .subscribe((pelicula: any) => {
          this.pelicula = pelicula;
        });
    });
  }

  irAtras() {
    this.location.back();
  }
}
