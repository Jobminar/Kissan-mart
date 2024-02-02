import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-refunds',
  templateUrl: './refunds.component.html',
  styleUrls: ['./refunds.component.css']
})
export class RefundsComponent {
  constructor(private location: Location){}
  goToPreviousPage(): void {
    this.location.back();
  }
refunds:any=[
  {
    quantity:'1',
    name:'onion',
    status:'completed',
    paymentMethod:'phonepe',
    price:'150'
  },
  {
    quantity:'1',
    name:'onion',
    status:'pending',
    paymentMethod:'phonepe',
    price:'150'
  },
]
}
