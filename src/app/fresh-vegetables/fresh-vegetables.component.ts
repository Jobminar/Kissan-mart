import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs';
@Component({
  selector: 'app-fresh-vegetables',
  templateUrl: './fresh-vegetables.component.html',
  styleUrls: ['./fresh-vegetables.component.css']
})
export class FreshVegetablesComponent {
term:any;
categories=[
  {src: 'assets/Group 41.png',
    alt: 'Product 1'
  },
  {
    src:'assets/Group 42.png',
    alt:'category2'
  },
  {
    src:'assets/Group 43.png',
    alt:'category3'
  },
  {
    src:'assets/Group 44.jpg',
    alt:'category4'
  },
  {
    src:'assets/Group 41.png',
    alt:'category5'
  }
]

buttonColor: string = '#00853E';
originalColor:string='#FF2400';
buttonText:string='Add to Basket';
originalText='Remove';



productItems = [
  { 
    src: 'assets/Rectangle 3.png',
    alt: 'Product 1',
    name:'onion',
    price: 120,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },
  { 
    src: 'assets/Rectangle 22.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 120,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },
  { 
    src: 'assets/Rectangle 22.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 120,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },
  { 
    src: 'assets/Rectangle 26.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 120,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },{ 
    src: 'assets/Rectangle 27.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 120,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },{ 
    src: 'assets/Rectangle 32.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 120,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },{ 
    src: 'assets/Rectangle 38.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 120,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },{ 
    src: 'assets/Rectangle 39.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 19.99,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },{ 
    src: 'assets/Rectangle 27.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 19.99,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  },{ 
    src: 'assets/Rectangle 32.jpg',
    alt: 'Product 2',
    name:'onion',
    price: 19.99,
    count: 1,
    button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
  }
 
];

changeColor(product: any) {
  const button = product.button;
  button.buttonColor = button.buttonColor === button.originalColor ? '#00853E' : button.originalColor;
  button.buttonText = button.buttonText === button.originalText ? 'Add to Basket' : button.originalText;
}

increaseCount(product: any) {
  product.count++;
}

decreaseCount(product: any) {
  if (product.count > 1) {
    product.count--;
  }
}
largerQuantity(product:any)
{
  alert("hhhh")
}
constructor(private router: Router) { }

navigateToFreshFruits() {
  this.router.navigate(['src/app/fresh-fruits.html']);
}

}