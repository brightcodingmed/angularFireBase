import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe((res: any[]) => {
      this.products = res;
      console.log(res);
    })
  }

  deleteProduct(id) {
    this.productService.delete(id)
                       .then(() => {
                         console.log('this product is deleted ');
                       })
                       .catch(err => console.log(err.message))
  }

  toggleActiveProduct(product) {
    this.productService.toggleProduct(product)
                       .then(() => {

                       })
                       .catch(err => {
                         console.error(err.message)
                       })
  }

}
