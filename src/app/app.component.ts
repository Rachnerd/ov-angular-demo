import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './ui/product/product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

type Product = {
  title: string;
  image: string;
  description: string;
  price: number;
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ov-angular-demo';

  products: Product[] = [];

  private httpClient = inject(HttpClient);

  ngOnInit(): void {
    this.httpClient
      .get<Product[]>('https://fakestoreapi.com/products/category/electronics')
      .subscribe((products) => (this.products = products));
  }
}
