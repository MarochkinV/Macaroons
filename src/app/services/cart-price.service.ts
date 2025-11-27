import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartPriceService {
  total: number = 0;
  constructor() { }
}
