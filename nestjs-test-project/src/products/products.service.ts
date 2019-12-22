import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodID = new Date().toString();
    const newProduct = new Product(prodID, title, desc, price);
    this.products.push(newProduct);
    return prodID;
  }
}