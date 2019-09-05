import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  paises: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.http
      .get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((respuesta: any) => {
        for (const pais of respuesta) {
          this.paises.push(pais.name);
        }
      });
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  }
}
