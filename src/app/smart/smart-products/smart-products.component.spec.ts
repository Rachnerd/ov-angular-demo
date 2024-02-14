import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProductsComponent } from './smart-products.component';
import { ProductService } from '../../state/product.service';
import { EMPTY } from 'rxjs';

describe('SmartProductsComponent', () => {
  let component: SmartProductsComponent;
  let fixture: ComponentFixture<SmartProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartProductsComponent],
      providers: [
        {
          provide: ProductService,
          useValue: {
            get: () => {},
            products$: EMPTY,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
