import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MarcadorEditarComponent } from './components/marcador-editar.component';

@NgModule({
  declarations: [AppComponent, MapaComponent, MarcadorEditarComponent],
  entryComponents: [MarcadorEditarComponent], // Componentes que se pueden usar como parámetros.
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtsgQPDvzDO7KbTrYVJNKKNNgDwgo_HFk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
