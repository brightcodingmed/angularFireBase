import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
          private productService: ProductService,
          private router: Router
       ) { }

  ngOnInit() {
  }

  createProduct(f) {
    if(f.valid) {
      
      let data = {published: new Date(), ...f.value};
    
      this.productService.create(data)
                         .then(res => {
                            this.router.navigate(['/products'])
                         })
                         .catch(err => {
                           console.log(err.message)
                         })

    }
  }

}
