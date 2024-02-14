import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type Product = {
  title: string;
  image: string;
  description: string;
  price: number;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = inject(HttpClient);
  private productsSubject = new Subject<Product[]>();
  products$: Observable<Product[]>;

  constructor() {
    this.products$ = this.productsSubject.asObservable();
  }

  get(): void {
    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products/category/electronics')
      .subscribe((products) => this.productsSubject.next(products));
  }
}
