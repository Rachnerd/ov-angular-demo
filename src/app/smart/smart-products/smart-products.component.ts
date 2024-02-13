import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductComponent } from '../../ui/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

type Product = {
  title: string;
  image: string;
  description: string;
  price: number;
};

@Component({
  selector: 'app-smart-products',
  standalone: true,
  imports: [CommonModule, ProductComponent, HttpClientModule],
  templateUrl: './smart-products.component.html',
  styleUrl: './smart-products.component.css',
})
export class SmartProductsComponent implements OnInit {
  products: Product[] = [];

  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products/category/electronics')
      .subscribe((products) => (this.products = products));
  }
}
