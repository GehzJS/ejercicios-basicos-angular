import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private API_KEY = 'f5926ab7dae9675a85b813d6af0357fe';
  private API_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  generateDate(type: boolean) {
    const fecha = new Date();
    let completa: string;
    const month = fecha.getMonth() + 1;
    return (completa =
      fecha.getFullYear().toString() +
      '-' +
      String(type ? month : month - 1).padStart(2, '0') +
      '-' +
      String(fecha.getDate()).padStart(2, '0'));
  }

  getAvailables() {
    const url = `${
      this.API_URL
    }/discover/movie?primary_release_date.gte=${this.generateDate(
      false
    )}&primary_release_date.lte=${this.generateDate(true)}&api_key=${
      this.API_KEY
    }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map((peliculas: any) => {
        return peliculas.results;
      })
    );
  }

  getAdultMovies() {
    const url = `${this.API_URL}/discover/movie/?certification_country=MX&certification=R&sort_by=vote_average.desc&api_key=${this.API_KEY}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map((peliculas: any) => {
        return peliculas.results;
      })
    );
  }

  getKidMovies() {
    const url = `${this.API_URL}/discover/movie?certification_country=MX&certification.lte=G&sort_by=popularity.desc&api_key=${this.API_KEY}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map((peliculas: any) => {
        return peliculas.results;
      })
    );
  }

  getBOTY() {
    const year = new Date().getFullYear().toString();
    const url = `${this.API_URL}/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&api_key=${this.API_KEY}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map((peliculas: any) => {
        return peliculas.results;
      })
    );
  }

  searchMovies(movie: string) {
    const url = `${this.API_URL}/search/movie?query=${movie}&sort_by=popularity.desc&api_key=${this.API_KEY}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK').pipe(
      map((peliculas: any) => {
        return peliculas.results;
      })
    );
  }

  getMovie(id: string) {
    const url = `${this.API_URL}/movie/${id}?api_key=${this.API_KEY}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url, 'JSONP_CALLBACK');
  }
}
