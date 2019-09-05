import { ArchivoModel } from '../models/archivo.model';
import {
  Directive,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appCargarFotos]'
})
export class CargarFotosDirective {
  @Input() archivos: ArchivoModel[] = [];
  @Output() sobre: EventEmitter<boolean>;

  constructor() {
    this.sobre = new EventEmitter();
  }

  @HostListener('dragover', ['$event'])
  public mouseSobre(evento: any) {
    this.sobre.emit(true);
    this.noAbrir(evento);
  }

  @HostListener('dragleave', ['$event'])
  public mouseDeja(evento: any) {
    this.sobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public archivoSoltado(evento: any) {
    const transferencia = this.transferencia(evento);
    if (transferencia) {
      this.obtenerArchivos(transferencia.files);
    }
    this.noAbrir(evento);
    this.sobre.emit(false);
  }

  private transferencia(evento: any) {
    return evento.dataTransfer
      ? evento.dataTransfer
      : evento.originalEvent.dataTransfer;
  }

  private obtenerArchivos(archivos: FileList) {
    // tslint:disable-next-line: forin // Se obtienen las propiedades.
    for (const propiedad in Object.getOwnPropertyNames(archivos)) {
      const temporal = archivos[propiedad]; // Se crea un objeto con las propiedades.
      if (this.archivoValido(temporal)) {
        const nuevo = new ArchivoModel(temporal);
        this.archivos.push(nuevo);
      }
    }
  }

  private noAbrir(evento: any) {
    evento.preventDefault();
    evento.stopPropagation();
  }

  private archivoExistente(nombre: string) {
    for (const archivo of this.archivos) {
      return archivo.nombre === nombre ? true : false;
    }
  }

  private soloImagen(tipo: string) {
    return tipo.startsWith('image') ? true : false;
  }

  private archivoValido(archivo: File) {
    return !this.archivoExistente(archivo.name) && this.soloImagen(archivo.type)
      ? true
      : false;
  }
}
