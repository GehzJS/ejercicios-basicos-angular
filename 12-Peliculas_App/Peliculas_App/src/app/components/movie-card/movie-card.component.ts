import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() pelicula: any = {};

  constructor(private router: Router) {}

  ngOnInit() {}

  verPelicula() {
    this.router.navigate(['/movie', this.pelicula.id]);
  }
}
