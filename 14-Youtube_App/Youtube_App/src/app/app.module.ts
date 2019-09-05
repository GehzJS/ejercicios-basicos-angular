import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoComponent } from './components/video/video.component';
import { VideoPipe } from './pipes/video.pipe';
import { ImagenPipe } from './pipes/imagen.pipe';
import { DescripcionPipe } from './pipes/descripcion.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    VideoComponent,
    VideoPipe,
    ImagenPipe,
    DescripcionPipe,
    DomSeguroPipe,
    ModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
