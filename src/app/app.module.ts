import {NgModule, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {PhoneComponent} from './components/phone/phone.component';
import {InstagramComponent} from './components/instagram/instagram.component';
import {CartComponent} from './components/cart/cart.component';
import {ProductComponent} from './components/product/product.component';
import {AdvantageComponent} from './components/advantage/advantage.component';
import {ButtonEffectDirective} from './directives/button-effect.directive';
import {TextLimitPipe} from './pipes/text-limit.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import {ProductService} from "./services/product.service";


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    InstagramComponent,
    CartComponent,
    ProductComponent,
    AdvantageComponent,
    ButtonEffectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextLimitPipe,
    PhoneFormatPipe,

  ],
  providers: [
    ProductService,
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent, PhoneComponent, CartComponent, InstagramComponent]
})
export class AppModule {
}
