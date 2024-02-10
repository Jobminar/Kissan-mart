import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-past-order',
  templateUrl: './past-order.component.html',
  styleUrls: ['./past-order.component.css']
})
export class PastOrderComponent implements OnInit {

  ngOnInit(): void {
    this.navigator.setupBackButtonListener();
  }
  constructor(private location: Location,
              private navigator:NavigationService
              )
  {
    
  }
  goToPreviousPage(): void {
    this.location.back();
  }
  pastOrders:any=[
    {
      itemImage:'assets/fruits-products/Rectangle 3.jpg',
      quantity:1,
      name:'onion',
      status:'delivered',
      Address :'grand mother',
      date:'01/01/2013',
      costPerUnit:40,
      price:40
    },
    {
      itemImage:'assets/fruits-products/Rectangle 3.jpg',
      quantity:'1',
      name:'onion',
      status:'delivered',
      date:'01/010/2013',
      address:'home',
      costPerItem:150,
      price:'150'
    },
  ]
  
}
