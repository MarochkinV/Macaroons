import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: unknown): string {
    let phoneNumber = String(value).replace(/\D/g, '');

    if (!phoneNumber.startsWith('375') || phoneNumber.length !== 12) {
      return String(value);
    }
    const countryCode = phoneNumber.slice(0, 3);
    const operatorCode = phoneNumber.slice(3, 5);
    const part1 = phoneNumber.slice(5, 8);
    const part2 = phoneNumber.slice(8, 10);
    const part3 = phoneNumber.slice(10, 12);

    return `+${countryCode} (${operatorCode}) ${part1}-${part2}-${part3}`;
  }
}
