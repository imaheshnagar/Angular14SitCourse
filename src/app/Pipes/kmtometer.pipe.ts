import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kmtometer'
  //pure:false
})
export class KmtometerPipe implements PipeTransform {
  transform(value: number): number {
    // async 
    return  value * 1000;
  }

}
