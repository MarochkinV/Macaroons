import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): ProductType [] {
    //ajax
    return [
      {
        image: 'product-1.png',
        title: 'Макарун с малиной',
        amount: '1 шт.',
        price: 1.70,
      },
      {
        image: 'product-2.png',
        title: 'Макарун с манго',
        amount: '1 шт.',
        price: 1.70,
      },
      {
        image: 'product-3.png',
        title: 'Пирог с ванилью',
        amount: '1 шт.',
        price: 1.70,
      },
      {
        image: 'product-4.png',
        title: 'Пирог с фисташками',
        amount: '1 шт.',
        price: 1.70,
      },
    ];
  }
}
