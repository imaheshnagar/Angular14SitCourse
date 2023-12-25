import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/Services/product.service';
import { product } from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  
})
export class ProductListComponent implements OnInit {

  constructor(private prdservice:ProductService)
  {

  }

  ProductList: product[]=[];
  cart :product[]  = [];
  
  ngOnInit(): void {
 
    this.ProductList =  this.prdservice.getproducts();
  }

  AddtoCart(prdId :number) {
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
