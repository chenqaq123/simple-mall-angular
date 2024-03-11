import { Component } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product : Product|undefined;

  constructor(
    private route:ActivatedRoute,
    private cartService:CartService
  ) {}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product=>product.id === productIdFromRoute);
  }

  addToCart(product: Product){
    this.cartService.addCart(product);
    window.alert('Your product has been added to the cart!');
  }
} 
