import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProductsComponent } from './smart-products.component';

describe('SmartProductsComponent', () => {
  let component: SmartProductsComponent;
  let fixture: ComponentFixture<SmartProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmartProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
