import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      const arrPalabras = value.split(' '); //separo la oracion en un array de palabras
      const arrTemp = [];
      for (let palabra of arrPalabras) {
        arrTemp.push(palabra[0].toUpperCase() + palabra.slice(1).toLowerCase()); //pongo la primera letra en mayuscula y las demas en minuscula
      }
      return arrTemp.join(' ');
    }
    else {
      return null;
    }
  }
}
