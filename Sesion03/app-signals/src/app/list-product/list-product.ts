import { Component, Inject, Input, output, Signal } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { Product } from '../product/product';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-list-product',
  imports: [Product],
  templateUrl: './list-product.html',
  styleUrl: './list-product.scss',
})
export class ListProduct {
  // onAddToCart = output<IProduct>();

  productService: ProductService;
  public listProducts: Signal<IProduct[]>;

  constructor(@Inject("ProvideProduct") productService: ProductService){
    this.productService = productService;
    this.listProducts = this.productService.listProducts;
    //this.listProducts.forEach(p => p.stock = 0);
  }

  public addToCart(product:IProduct){
    this.productService.addToCart(product);  
  }
}
