import { Component, OnInit } from '@angular/core';
import { ProductViewService } from 'src/app/services/product-view.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductViewService) { }

  ngOnInit(): void {
    this.productService.getProducts()
  }

}
