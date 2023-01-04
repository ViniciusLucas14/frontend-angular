import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  constructor(private httpCliente: HttpClient) { }

  getProducts(): Observable<Product> {
    return this.httpCliente.get<Product>(environment.apiUrl + 'api/v1/product/getAll')
  }
}
