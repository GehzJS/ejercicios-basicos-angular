import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {
  transform(name: string): string {
    const word = name.split('');
    return word[0].toLowerCase().concat(name.substring(1, name.length));
  }
}
