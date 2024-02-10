import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.css']
})
export class RefundsComponent implements OnInit {

  ngOnInit(): void {
      this.navigator.setupBackButtonListener();
  }
  constructor(private location: Location,
              public navigator:NavigationService){}
  goToPreviousPage(): void {
    this.location.back();
  }
refunds:any=[
  {
    itemImage:'assets/fruits-products/Rectangle 3.jpg',
    quantity:'1',
    name:'onion',
    status:'completed',
    paymentMethod:'phonepe',
    price:'150'
  },
  {
    itemImage:'assets/fruits-products/Rectangle 3.jpg',
    quantity:'1',
    name:'onion',
    status:'pending',
    paymentMethod:'phonepe',
    price:'150'
  },
]
}
