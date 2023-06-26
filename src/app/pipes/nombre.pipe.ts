import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titulo'
})
export class NombrePipe implements PipeTransform {

  transform(nombre: String): unknown {
    return nombre.toUpperCase;
  }

}
