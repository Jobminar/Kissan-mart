import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-past-order',
  templateUrl: './past-order.component.html',
  styleUrls: ['./past-order.component.css']
})
export class PastOrderComponent {
  constructor(private location: Location){}
  goToPreviousPage(): void {
    this.location.back();
  }
  pastOrders:any=[
    {
      quantity:'1',
      name:'onion',
      status:'delivered',
      Address :'grand mother',
      date:'01/01/2013',
      price:'150'
    },
    {
      quantity:'1',
      name:'onion',
      status:'delivered',
      date:'01/010/2013',
      address:'home',
      price:'150'
    },
  ]
  
}
