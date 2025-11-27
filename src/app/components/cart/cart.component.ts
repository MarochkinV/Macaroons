import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartPriceService} from "../../services/cart-price.service";

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  showCart: boolean = true;

  constructor(public cartService: CartService, public cartPriceService: CartPriceService) {
  }

  ngOnInit(): void {
  }

}
