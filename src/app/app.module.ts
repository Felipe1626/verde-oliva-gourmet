import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { PizzaComponent } from './components/products/components/pizza/pizza.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorComponent } from './components/error/error.component';
import { HamburgersComponent } from './components/products/components/hamburgers/hamburgers.component';
import { FrenchFriesComponent } from './components/products/components/french-fries/french-fries.component';
import { ToShareComponent } from './components/products/components/to-share/to-share.component';
import { CrunchWingsComponent } from './components/products/components/crunch-wings/crunch-wings.component';
import { PataconesComponent } from './components/products/components/patacones/patacones.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    PizzaComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ErrorComponent,
    HamburgersComponent,
    FrenchFriesComponent,
    ToShareComponent,
    CrunchWingsComponent,
    PataconesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
