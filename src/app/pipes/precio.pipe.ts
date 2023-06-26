import { Pipe, PipeTransform } from '@angular/core';
import { Juego } from '../entidades/juego';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(value: Number): String {
    const precio = value.toString();
    const digitos = precio.length;
    let resultado = '';
  
    for (let caracter = 0; caracter < digitos; caracter++) {
      resultado += precio[caracter];
      if ((digitos - caracter - 1) % 3 === 0 && caracter !== digitos - 1) {
        resultado += '.';
      }
    }
  
    return 'ARG$ ' + resultado + ",00";
  }

}
