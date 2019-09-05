import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  peliculas: any[] = [];
  termino: string;

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      this.termino = parametros.termino;
      this.peliculaService
        .searchMovies(parametros.termino)
        .subscribe((peliculas: any) => {
          this.peliculas = peliculas;
        });
    });
  }
}
