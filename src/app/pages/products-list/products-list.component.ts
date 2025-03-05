import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {

  products = signal<Product[]>([
    {
      id: 1,
      title: 'string',
      image: 'string',
      price: 109.95,
      stock: 10,
    },
    {
      id: 2,
      title: 'stringtwo',
      image: 'stringtwo',
      price: 119.95,
      stock: 11,
    },
    {
      id: 3,
      title: 'stringthree',
      image: 'stringthree',
      price: 129.95,
      stock: 13,
    },
    {
      id: 4,
      title: 'stringfour',
      image: 'stringfour',
      price: 149.95,
      stock: 14,
    },
  ])
}
