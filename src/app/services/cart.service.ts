import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: 'string',
      image: 'https://picsum.photos/seed/picsum/200/300',
      price: 109.95,
      stock: 0,
    },
    {
      id: 2,
      title: 'stringtwo',
      image: 'https://picsum.photos/seed/picsum/200/300',
      price: 119.95,
      stock: 11,
    },
    {
      id: 3,
      title: 'stringthree',
      image: 'https://picsum.photos/seed/picsum/200/300',
      price: 129.95,
      stock: 13,
    },
    {
      id: 4,
      title: 'stringfour',
      image: 'https://picsum.photos/seed/picsum/200/300',
      price: 149.95,
      stock: 14,
    },
  ]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() { }
}
