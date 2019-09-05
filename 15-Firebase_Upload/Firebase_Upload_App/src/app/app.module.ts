import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { SubirComponent } from './components/subir/subir.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CargarFotosDirective } from './directives/cargar-fotos.directive';

@NgModule({
  declarations: [AppComponent, FotosComponent, SubirComponent, NavbarComponent, CargarFotosDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
