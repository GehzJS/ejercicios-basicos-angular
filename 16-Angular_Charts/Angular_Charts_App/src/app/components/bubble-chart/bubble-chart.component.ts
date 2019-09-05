import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {
  public data = [
    {
      data: [],
      label: 'Series A',
      backgroundColor: '#Ef5350',
      borderColor: '#263238',
      hoverBackgroundColor: '#78909C',
      hoverBorderColor: '#212121'
    }
  ];
  public options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 10
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10
          }
        }
      ]
    }
  };
  public type = 'bubble';
  public legend = true;

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

  aleatorio(multiplicador: number = 100) {
    return Math.round(Math.random() * multiplicador) / 10;
  }

  llenar() {
    this.limpiar();
    for (let i = 0; i < 7; i++) {
      this.data[0].data.push({
        x: this.aleatorio(),
        y: this.aleatorio(),
        r: this.aleatorio(250)
      });
    }
  }

  limpiar() {
    for (let i = 0; i < 7; i++) {
      this.data[0].data = [];
    }
  }
}
