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

  async ngOnInit() {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();
    this.products.set(data);
  }

  products = signal<Product[]>([
    // {
    //   id: 1,
    //   title: 'string',
    //   image: 'https://picsum.photos/seed/picsum/200/300',
    //   price: 109.95,
    //   stock: 0,
    // },
    // {
    //   id: 2,
    //   title: 'stringtwo',
    //   image: 'https://picsum.photos/seed/picsum/200/300',
    //   price: 119.95,
    //   stock: 11,
    // },
    // {
    //   id: 3,
    //   title: 'stringthree',
    //   image: 'https://picsum.photos/seed/picsum/200/300',
    //   price: 129.95,
    //   stock: 13,
    // },
    // {
    //   id: 4,
    //   title: 'stringfour',
    //   image: 'https://picsum.photos/seed/picsum/200/300',
    //   price: 149.95,
    //   stock: 14,
    // },
  ])
}
