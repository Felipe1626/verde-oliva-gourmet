import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.sass']
})
export class PizzaComponent {
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
