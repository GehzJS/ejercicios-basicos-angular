import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Marcador } from 'src/app/classes/marcador';
import { MarcadorEditarComponent } from '../marcador-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  marcadores: Marcador[] = [];
  latitud = 51.678418;
  longitud = 7.809007;

  constructor(private snackbar: MatSnackBar, private dialog: MatDialog) {}

  ngOnInit() {}

  agregar(evento: any) {
    const nuevo = new Marcador(evento.cords.lat, evento.cords.lng);
    this.marcadores.push(nuevo);
    this.guardar();
    this.snackbar.open('Marcador agregado', 'Cerrar', { duration: 3000 });
  }

  editar(marcador: Marcador) {
    const dialogRef = this.dialog.open(MarcadorEditarComponent, {
      width: '250px',
      data: { titulo: marcador.titulo, descripcion: marcador.descripcion }
    });
    dialogRef.afterClosed().subscribe(datos => {
      if (datos) {
        marcador.titulo = datos.titulo;
        marcador.descripcion = datos.descripcion;
        this.guardar();
        this.snackbar.open('Marcador editado', 'Cerrar', { duration: 3000 });
      }
    });
  }

  borrar(indice: number) {
    this.marcadores.splice(indice, 1);
    this.guardar();
    this.snackbar.open('Marcador borrado', 'Cerrar', { duration: 3000 });
  }

  leer() {
    this.marcadores = JSON.parse(localStorage.getItem('coordenadas'));
    return this.marcadores.length;
  }

  guardar() {
    localStorage.setItem('coordenadas', JSON.stringify(this.marcadores));
  }
}
