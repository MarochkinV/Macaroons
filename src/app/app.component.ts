import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";
import {CartPriceService} from "./services/cart-price.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public advantages: AdvantageType[] = [
    {
      number: '1',
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      number: '2',
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      number: '3',
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      number: '4',
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public products: ProductType[] = []

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  };


  constructor(private productService: ProductService, public cartService: CartService, public cartPriceService: CartPriceService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public burgerOpenMenu(target: HTMLElement): void {
    target.classList.add('open');
  };

  public burgerCloseMenu(target: HTMLElement): void {
    target.classList.remove('open');
  };

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  };

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    alert(product.title + ' добавлен в корзину!')
    this.cartService.count++;
    this.cartPriceService.total++;
  };

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Выберите макарун')
      return
    }
    if (!this.formValues.name) {
      alert('Заполните имя')
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон')
      return;
    }

    //ajax запрос на сервер
    alert('Спасибо за заказ')

    this.formValues = {
      productTitle: '',
      name: '',
      phone: ''
    }
  };
}


