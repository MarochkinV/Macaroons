import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PhoneComponent } from './components/phone/phone.component';
import { InstagramComponent } from './components/instagram/instagram.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { AdvantageComponent } from './components/advantage/advantage.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    InstagramComponent,
    CartComponent,
    ProductComponent,
    AdvantageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,PhoneComponent,CartComponent,InstagramComponent]
})
export class AppModule { }
