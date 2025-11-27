import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartPriceService {

  constructor(private cartService: CartService) { }

  get total(): number {
    return this.cartService.items.reduce((sum, item) => sum + item.price, 0);
  }

}
