import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ftoCtempConversion'
})
export class FtoCtempConversionPipe implements PipeTransform {

  transform(farenite: number,arg1:string,arg2:string): number {

    console.log(arg1);
    console.log(arg2);

    return (farenite -32)/9;
  }

}
