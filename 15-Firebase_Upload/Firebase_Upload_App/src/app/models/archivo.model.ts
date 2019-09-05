export class ArchivoModel {
  public nombre: string;
  public url: string;
  public estado: boolean;
  public progreso: number;

  constructor(public archivo: File) {
    this.nombre = archivo.name;
    this.estado = false;
    this.progreso = 0;
  }
}
