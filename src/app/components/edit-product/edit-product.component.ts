import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id: string;

  myProduct: Product = {
    title: '',
    description: '',
    price: 0,
    stock: 0,
    active: false,
    published: new Date()
  };

  constructor(
       private router: Router, 
       private productService: ProductService,
       private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.editProduct(this.id);
  }

  editProduct(id) {
    this.productService.getOne(id).subscribe((res: Product) => {
      this.myProduct = res;
      console.log(res)
    })
  }

  updateProduct(form) {

    if(form.valid) {
       this.productService.update(this.id, this.myProduct)
                       .then(res => {
                          this.router.navigate(['/products']);
                       })
                       .catch(err => {
                         console.error(err.message);
                       })
    }


  
  }

}
