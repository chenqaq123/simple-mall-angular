import { Component } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(
    private cartService:CartService
  ) {}

  items = this.cartService.getItems();
}
