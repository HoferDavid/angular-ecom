import { Component, inject, input, output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  cartService = inject(CartService);

  label = input('');

  btnClicked = output();
}
