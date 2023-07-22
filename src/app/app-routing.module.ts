import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { PizzaComponent } from './components/products/components/pizza/pizza.component';
import { HamburgersComponent } from './components/products/components/hamburgers/hamburgers.component';
import { FrenchFriesComponent } from './components/products/components/french-fries/french-fries.component';
import { CrunchWingsComponent } from './components/products/components/crunch-wings/crunch-wings.component';
import { PataconesComponent } from './components/products/components/patacones/patacones.component';
import { ToShareComponent } from './components/products/components/to-share/to-share.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '' , component: ProductsComponent },
  { path: 'productos/pizzas' , component: PizzaComponent },
  { path: 'productos/hamburguesas' , component: HamburgersComponent },
  { path: 'productos/papitas-fritas' , component: FrenchFriesComponent },
  { path: 'productos/alitas-crunch' , component: CrunchWingsComponent },
  { path: 'productos/patacones' , component: PataconesComponent },
  { path: 'productos/compartir' , component: ToShareComponent },
  { path: 'contacto' , component: ContactComponent  },
  { path: 'cart' , component: CartComponent },
  { path: '**' , component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
