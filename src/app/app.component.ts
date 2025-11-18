import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantageType} from "./types/advantage.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  public products: ProductType[] = [
    {
      image: 'product-1.png',
      title: 'Макарун с малиной',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product-2.png',
      title: 'Макарун с манго',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product-3.png',
      title: 'Пирог с ванилью',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'product-4.png',
      title: 'Пирог с фисташками',
      amount: '1 шт.',
      price: '1,70 руб.',
    },
  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  };

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


