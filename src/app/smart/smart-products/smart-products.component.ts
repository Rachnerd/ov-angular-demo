import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductComponent } from '../../ui/product/product.component';
import { ProductService } from '../../state/product.service';

@Component({
  selector: 'app-smart-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  providers: [ProductService],
  templateUrl: './smart-products.component.html',
  styleUrl: './smart-products.component.css',
})
export class SmartProductsComponent implements OnInit {
  private productsService = inject(ProductService);
  products$ = this.productsService.products$;

  ngOnInit(): void {
    this.productsService.get();
  }
}
