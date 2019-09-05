import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  transform(imagen: string): string {
    const url = 'http://image.tmdb.org/t/p/w500';
    if (imagen === undefined || imagen === null) {
      return 'https://cdn-dom-p.azureedge.net/es/es/-/media/DOM/PimDam/sorry-image-not-available.png';
    } else {
      return url + imagen;
    }
  }
}
