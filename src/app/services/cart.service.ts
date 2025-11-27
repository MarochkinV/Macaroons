import { Injectable } from '@angular/core';
import { ProductType } from '../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items: ProductType[] = [];

  get count(): number {
    return this._items.length;
  }

  get items(): ProductType[] {
    return this._items;
  }

  addProduct(product: ProductType): void {
    this._items.push(product);
  }

  clearCart(): void {
    this._items = [];
  }
}
