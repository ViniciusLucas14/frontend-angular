import { Component, OnInit } from '@angular/core';
import { ProductViewService } from 'src/app/services/product-view/product-view.service';
import { Product } from 'src/app/interface/Products';
import { Observable } from 'rxjs';
import { ConfigurationService } from 'src/app/services/configuration/configuration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'all-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product$!: Observable<Product[]>
  constructor(private productService: ProductViewService, 
              public configurationService: ConfigurationService,
              private router: Router) { }

  ngOnInit(): void {
    this.product$ = this.productService.getProducts();
  }

  clickProductCard(name: string, id: number){
    this.router.navigate([name + '_' + id,])
    console.log(name, id);
  }
}
