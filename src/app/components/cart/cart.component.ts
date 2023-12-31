import { Component } from '@angular/core';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  faReceipt = faReceipt
  showOrder(){
    const cart = document.getElementById('cart')
    const close_button = document.getElementById('close_button')
    const open_button = document.getElementById('open_button')
    const cart_content = document.getElementById('cart_content')
    if (cart && close_button && open_button && cart_content ) {
      cart.classList.toggle('cart')
      cart.classList.toggle('cart_close')
      close_button.classList.toggle('hidden')
      close_button.classList.toggle('flex')
      cart_content.classList.toggle('hidden')
      open_button.classList.toggle('hidden')
      console.log('toggle');
      
    }
    console.log('click');
  }
}