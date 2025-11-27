import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'currencyRub'
})
export class CurrencyRubPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null || value === '') return '';

    const numValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numValue)) return '';

    const formattedValue = numValue.toFixed(2).replace('.', ',');

    return `${formattedValue} руб.`;
  }

}
