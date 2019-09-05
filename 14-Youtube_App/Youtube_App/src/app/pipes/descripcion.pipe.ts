import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descripcion'
})
export class DescripcionPipe implements PipeTransform {
  transform(descripcion: string): string {
    if (descripcion.length > 0) {
      return descripcion.substring(0, 200).concat('...');
    } else {
      return 'Este video no cuenta con una descripción.';
    }
  }
}
