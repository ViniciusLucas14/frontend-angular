import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductViewService {

  constructor(private httpCliente: HttpClient) { }

  getProducts() {
    this.httpCliente.get<any>(environment.apiUrl + 'api/v1/product/getAll').subscribe(r => {
      console.log(r);
    })
  }
}
