import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = '../../../assets/charts/';
  charts = [
    { name: 'Bar', image: 'bar-chart.png' },
    { name: 'Bubble', image: 'bubble-chart.png' },
    { name: 'Doughnut', image: 'doughnut-chart.png' },
    { name: 'Linear', image: 'linear-chart.png' },
    { name: 'Pie', image: 'pie-chart.png' },
    { name: 'Polar', image: 'polar-chart.png' },
    { name: 'Radar', image: 'radar-chart.png' },
    { name: 'Scatter', image: 'scatter-chart.png' }
  ];

  constructor() {}

  ngOnInit() {}
}
