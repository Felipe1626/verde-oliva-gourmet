import { Component, OnInit } from '@angular/core';
import { Product } from "../../models/product.model";
import { DataBaseService } from 'src/app/utils/data-base.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})


export class ProductsComponent implements OnInit{

  product!: Product;
  products!: Product[];
  ActionLabel!: string;

  constructor(private dataBaseService: DataBaseService){}

  ngOnInit(): void {
    this.product = new Product;
    this.ActionLabel = 'ADD';

  }

  addProduct(){
    if (this.product.id){
      console.log('all right at the moment');
      return
    }
    this.dataBaseService.addProduct(this.product)
    
    console.log('send');
  }
}
