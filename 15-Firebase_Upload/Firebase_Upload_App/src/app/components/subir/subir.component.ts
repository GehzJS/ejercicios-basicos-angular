import { Component, OnInit } from '@angular/core';
import { ArchivoModel } from '../../models/archivo.model';
import { FotosService } from '../../services/fotos.service';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent implements OnInit {
  archivos: ArchivoModel[] = [];
  sobre = false;

  constructor(private fotosService: FotosService) {}

  ngOnInit() {}

  cargar() {
    this.fotosService.cargar(this.archivos);
  }

  limpiar() {
    this.archivos.splice(0, this.archivos.length);
  }
}
