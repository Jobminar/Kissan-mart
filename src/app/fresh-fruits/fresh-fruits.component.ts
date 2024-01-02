import { Component } from '@angular/core';

@Component({
  selector: 'app-fresh-fruits',
  templateUrl: './fresh-fruits.component.html',
  styleUrls: ['./fresh-fruits.component.css']
})
export class FreshFruitsComponent {
  
  term:any;
  categories=[
    {src: 'assets/Group 44.jpg',
      alt: 'Product 1'
    },
    
    {
      src:'assets/Group 41.png',
      alt:'category5'
    },
    {
      src:'assets/Group 42.png',
      alt:'category2'
    },
    {
      src:'assets/Group 43.png',
      alt:'category3'
    }
  ]
  
  buttonColor: string = '#00853E'
  originalColor:string='#FF2400'
  buttonText:string='Add to Basket'
  originalText='Remove'
  
  
  productItems = [
    { 
      src: 'assets/fruits-products/Rectangle 3.jpg',
      alt: 'Product 1',
      name:'onion',
      price: 120,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },
    { 
      src: 'assets/fruits-products/Rectangle 22 (1).jpg',
      alt: 'Product 2',
      name:'onion',
      price: 120,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },
    { 
      src: 'assets/fruits-products/Rectangle 26 (1).jpg',
      alt: 'Product 2',
      name:'onion',
      price: 120,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },
    { 
      src: 'assets/fruits-products/Rectangle 38 (1).jpg',
      alt: 'Product 2',
      name:'onion',
      price: 120,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },{ 
      src: 'assets/fruits-products/Rectangle 22 (1).jpg',
      alt: 'Product 2',
      name:'onion',
      price: 120,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },{ 
      src: 'assets/fruits-products/Rectangle 27 (1).jpg',
      alt: 'Product 2',
      name:'onion',
      price: 120,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },{ 
      src: 'assets/fruits-products/Rectangle 32 (1).jpg',
      alt: 'Product 2',
      name:'onion',
      price: 120,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },{ 
      src: 'assets/fruits-products/Rectangle 33.jpg',
      alt: 'Product 2',
      name:'onion',
      price: 19.99,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },{ 
      src: 'assets/fruits-products/Rectangle 38 (1).jpg',
      alt: 'Product 2',
      name:'onion',
      price: 19.99,
      count: 1,
      button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
    },{ 
      src: 'assets/fruits-products/Rectangle 39 (1).jpg',
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
  
  
}
