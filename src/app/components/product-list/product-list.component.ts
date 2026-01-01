import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,          // ✅ for *ngFor
    ProductCardComponent   // ✅ for <app-product-card>
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Tomatoes', price: 40, category: 'Vegetables', image: 'assets/tomato.jpg' },
    { id: 2, name: 'Potatoes', price: 30, category: 'Vegetables', image: 'assets/potato.jpg' },
    { id: 3, name: 'Rice', price: 60, category: 'Grains', image: 'assets/rice.jpg' },
    { id: 4, name: 'Apples', price: 120, category: 'Fruits', image: 'assets/apple.jpg' }
  ];
}
