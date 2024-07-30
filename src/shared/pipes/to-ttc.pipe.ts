import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTTC',
  standalone: true
})
export class ToTTCPipe implements PipeTransform {

  transform(value: number ): number {
    let taux = 1.2; // taux
    return value * taux;
  }

}
