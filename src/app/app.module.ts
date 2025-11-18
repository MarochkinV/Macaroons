import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PhoneComponent } from './components/phone/phone.component';
import { PresentComponent } from './components/present/present.component';
import { InstagramComponent } from './components/instagram/instagram.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PresentComponent,
    InstagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,PhoneComponent,PresentComponent,InstagramComponent]
})
export class AppModule { }
