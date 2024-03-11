import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent {

  constructor(
    private cartService: CartService
  ) {}

  shippingCosts !: Observable<{type: string, price: number}[]>;

  ngOnInit(){
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
