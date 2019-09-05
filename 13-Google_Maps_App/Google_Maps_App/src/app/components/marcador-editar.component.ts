import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Marcador } from '../classes/marcador';

@Component({
  selector: 'app-marcador-editar',
  templateUrl: './marcador-editar.component.html',
  styleUrls: ['./marcador-editar.component.css']
})
export class MarcadorEditarComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MarcadorEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador,
    public formBuilder: FormBuilder
  ) {
    // FormBuilder sirve para cosntruir formularios.
    this.formulario = formBuilder.group({
      titulo: data.titulo,
      descripcion: data.descripcion
    });
  }

  ngOnInit() {}

  editar() {
    this.dialogRef.close(this.formulario.value);
  }

  cerrar() {
    this.dialogRef.close();
  }
}
