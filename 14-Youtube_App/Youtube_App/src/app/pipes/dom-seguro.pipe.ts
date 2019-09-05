import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomSeguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(video: string): any {
    const url = 'https://www.youtube.com/embed/';
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + video);
  }
}
