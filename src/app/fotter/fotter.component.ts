import { Component,Input ,OnInit,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-fotter',
  templateUrl: './fotter.component.html',
  styleUrls: ['./fotter.component.css']
})
export class FotterComponent implements OnInit {
    dumpyArray:any[]=[]
    ngOnInit(): void {
        this.countingCart()
        this.dumpyArray = this.cart.cartResponse; // Assuming cartResponse is not an Observable

        // Trigger change detection manually
        this.cdr.detectChanges();
    
        console.log('no of items ', this.cart.cartResponse);
    }   
  constructor(
    private router: Router,
    private sharedDataService:DataTransferService,
    private dataTrasnferService:DataTransferService,
    private cart:CartService,
    private cdr: ChangeDetectorRef
    )
   { 
    this.dumpyArray=this.cart.cartResponse
  
   }
   itemsInCart:any
   countOfFruits:number=0
   countingCart()
   {

    this.itemsInCart=this.dataTrasnferService.totalItems
    console.log("items",this.itemsInCart)
    // this.itemsInCart=this.dataTrasnferService.getAddItemsCount()
    // console.log("inside fotter")
    // this.countOfFruits=num
    // console.log("fruits",num)
    // this.itemsInCart=this.countOfVehetables + this.countOfFruits
   
  }
  countOfVehetables:number=0
  countingCartVegetables(num:number)
  {
   
  //   this.countOfVehetables=num
  //   console.log("vege",num)
  //  this.itemsInCart=this.countOfVehetables + this.countOfFruits
  //  console.log("total",this.itemsInCart)

  }


  navToHome()
  {
    this.router.navigate(['src/app/home.html']);
  }
  dummy:any[]=[]
  navToCart()
  {
    // this.dataTrasnferService.addingItemsToCart();
    this.dataTrasnferService.gettingItems()
    this.router.navigate(['src/app/my-cart']);
  }
  navToProfile()
  {
    this.router.navigate(['src/app/profile']);
  }
  navtoNotification()
  {
    this.router.navigate(['src/app/policy'])
  }
  navToOrders()
  {
    this.router.navigate(['orders'])
  }

  
}
