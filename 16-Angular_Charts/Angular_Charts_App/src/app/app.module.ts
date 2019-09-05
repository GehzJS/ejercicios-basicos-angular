import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LinearChartComponent } from './components/linear-chart/linear-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { PolarChartComponent } from './components/polar-chart/polar-chart.component';
import { ChartComponent } from './components/chart/chart.component';
import { NamesPipe } from './pipes/names.pipe';
import { BubbleChartComponent } from './components/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './components/scatter-chart/scatter-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LinearChartComponent,
    NavbarComponent,
    BarChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    PolarChartComponent,
    ChartComponent,
    NamesPipe,
    BubbleChartComponent,
    ScatterChartComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
