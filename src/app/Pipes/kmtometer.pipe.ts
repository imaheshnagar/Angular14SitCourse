import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kmtometer'
})
export class KmtometerPipe implements PipeTransform {
  transform(value: number): number {
    return  value * 1000;
  }

}
