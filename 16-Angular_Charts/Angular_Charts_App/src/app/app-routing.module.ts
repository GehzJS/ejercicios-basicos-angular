import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { LinearChartComponent } from './components/linear-chart/linear-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PolarChartComponent } from './components/polar-chart/polar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bar', component: BarChartComponent },
  { path: 'bubble', component: BubbleChartComponent },
  { path: 'doughnut', component: DoughnutChartComponent },
  { path: 'line', component: LinearChartComponent },
  { path: 'pie', component: PieChartComponent },
  { path: 'polar', component: PolarChartComponent },
  { path: 'radar', component: RadarChartComponent },
  { path: 'scatter', component: ScatterChartComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
