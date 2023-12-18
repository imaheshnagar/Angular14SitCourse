import { Component, OnInit } from '@angular/core';
import products from '../ProductData';
import { product } from '../Product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  ProductList: product[]=[];
  cart :product[]  = [];
  
  ngOnInit(): void {
    this.ProductList = products;
  }

  AddtoCart(prdId :any) {
    let prd = this.ProductList.find(x=>x.id == prdId);
    if(prd != undefined)
    {
      this.cart.push(prd);
    }
    console.log(this.cart);
  }
  RemoveFromCart(prdId: any) {

    console.log(prdId)
    //let prd = this.ProductList.find(x=>x.id == prdId);
   
  }


}
