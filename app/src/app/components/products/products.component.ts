import { Component, OnInit } from '@angular/core';
import { ProductViewService } from 'src/app/services/product-view.service';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/interface/Products';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product$!: Observable<Product[]>
  constructor(private productService: ProductViewService) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProducts();
  }

}
