import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    /*
    const keyword = value.toString();
    const arrValue = keyword.split(''); //me convierte el string en un array
    const arrReverso = arrValue.reverse();
    return arrReverso.join(''); //contrario a split
    */
   
    //Resumido en una linea
    return value.toString().split('').reverse().join('');
  }

}
