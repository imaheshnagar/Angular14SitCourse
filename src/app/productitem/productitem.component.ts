import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../Product';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent {

  @Input() prd : product = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  };
  @Input('evenRow') e:boolean =true;



  @Output()  productItemEvent :EventEmitter<number> = new EventEmitter<number>();

    AddtoCart(prdid: number) {
      this.productItemEvent.emit(prdid);
     }

}
