import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'video'
})
export class VideoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
