import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoticone',
})
export class EmoticonePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return '';
    return value + '🪓🗡️' ;
  }

}
