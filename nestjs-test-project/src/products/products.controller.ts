import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
    ): any {
    const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodID: string) {
    return this.productsService.getSingleProduct(prodID);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodID: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
    ) {
    this.productsService.updateProduct(prodID, prodTitle, prodDesc, prodPrice);
    return null;
  }

  @Delete(':id')
  removeProduct(@Param('id') prodID: string) {
    this.productsService.removeSingleProduct(prodID);
    return null;
  }

}
