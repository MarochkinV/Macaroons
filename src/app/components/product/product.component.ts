import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductType = {} as ProductType;
  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {
    // this.product = {
    //   image: '',
    //   title: '',
    //   amount: '',
    //   price: '',
    // }
  }

  ngOnInit(): void {
  }

  addProductToCart() {
    this.addToCartEvent.emit(this.product);
  };

}
