import { Component } from '@angular/core';
import { faShoppingBasket, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-to-share',
  templateUrl: './to-share.component.html',
  styleUrls: ['./to-share.component.sass']
})
export class ToShareComponent {
  faShoppingBasket = faShoppingBasket
  faPenToSquare = faPenToSquare

  cuantity: number = 1;

  addCuantity(){
    this.cuantity ++
  }

  removeCuantity(){
    if (this.cuantity > 0) {
      this.cuantity --
    }
    if (this.cuantity == 0) {
      this.toggleCuantity()
      this.cuantity = 1;
    }
  }

  toggleCuantity(){
    const startOrder = document.getElementById('startOrder')
    const cuantityOrder = document.getElementById('cuantityOrder')
    if (startOrder && cuantityOrder) {
      startOrder.classList.toggle('hidden');
      cuantityOrder.classList.toggle('hidden');
      cuantityOrder.classList.toggle('flex');

      console.log('toggle');
      
    }
    console.log('click');
  }
}
