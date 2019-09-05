import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descripcion'
})
export class DescripcionPipe implements PipeTransform {
  transform(descripcion: string): string {
    if (descripcion.length === 0) {
      return 'No hay una descripcion disponible para esta pelicula.';
    } else {
      return descripcion.substring(0, 200).concat('...');
    }
  }
}
