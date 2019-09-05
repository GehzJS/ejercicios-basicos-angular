import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(imagenes: any): string {
    if (imagenes) {
      return imagenes.high.url;
    } else {
      return null;
    }
  }
}
