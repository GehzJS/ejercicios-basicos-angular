import { Component, OnInit } from '@angular/core';
import { FotosService } from '../../services/fotos.service';
import { ImagenModel } from '../../models/imagen.model';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  fotos: ImagenModel[] = [];

  constructor(private fotosService: FotosService) {}

  ngOnInit() {
    this.fotosService.listar().subscribe((fotos: any) => (this.fotos = fotos));
  }
}
