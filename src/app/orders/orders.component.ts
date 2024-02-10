import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  [x: string]: any;
  
  goToPreviousPage(): void {
    this.location.back();
   
   
  }
  constructor(private location:Location,
              private orderService:OrdersService){
                // this.calculatingMoney()
              }
  ngOnInit(): void {
    this.gettingItems();
    setTimeout(() => {
      this.calculatingMoney();
  }, 1000);
  }
  orders:any[]=[];

      gettingItems()
    {
      
      console.log("inside getting")
      this.orderService.fetchData().subscribe(
        (response) => {
        
          this.orderService.formatData(response);
        this.orders=response
        console.log("orders", this.orders);
          // Notify child components about the data update
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
      
    
  }

  total:number=0;
  delivaryCharges:number=30;
  grandTotal:number=0;
  calculatingMoney()
  {
    console.log("inside the calculate")
    for (let i = 0; i < this.orders.length; i++) {
      const element = this.orders[i];
      this.total=this.total+element.price
    }
    console.log("money",this.total)
    this.grandTotal=this.total+this.delivaryCharges
  }
}
