import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: './scatter-chart.component.html',
  styleUrls: ['./scatter-chart.component.css']
})
export class ScatterChartComponent implements OnInit {
  public options = {
    responsive: true
  };
  public labels = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabaso'
  ];

  public data = [
    {
      data: [],
      label: 'Series A',
      pointRadius: 10
    }
  ];
  public type = 'scatter';
  public colors = [
    {
      backgroundColor: [
        '#Ef5350',
        '#EC407A',
        '#7E57C2',
        '#42A5F5',
        '#66BB6A',
        '#FFEE58',
        '#FF7043'
      ]
    }
  ];

  constructor() {}

  ngOnInit() {
    this.llenar();
  }

  aleatorio() {
    let numero = Math.round(Math.random() * 10) / 10;
    numero > 0.6 ? (numero = numero) : (numero = numero * -1);
    return numero;
  }

  llenar() {
    this.limpiar();
    for (let i = 0; i < 7; i++) {
      this.data[0].data.push({
        x: this.aleatorio(),
        y: this.aleatorio()
      });
    }
  }

  limpiar() {
    for (let i = 0; i < 7; i++) {
      this.data[0].data = [];
    }
  }
}
