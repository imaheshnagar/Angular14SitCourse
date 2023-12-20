import { Injectable } from '@angular/core';
import product from '../app/ProductData'

@Injectable(
  {
  providedIn: 'root'
}
)
export class ProductService {

  constructor() { }

  test()
  {
    console.log("from product service");
  }

  getproducts()
  {
    return product;
  }

  
}
