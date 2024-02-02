import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';




@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit{
   dummy:any[]=[]
   
   ngOnInit(): void {
    this.cartService.fetchData().subscribe(
      (response) => {
        console.log("im getting", response);
  
        // Update sharedArray inside the subscription
        this.dummy = response;
  
        // Format data in the cart service
        this.cartService.formatData(response);
  
        // Call other methods that depend on this data
        this.updateTotalPrice();
  
        // Update sharedArray with the latest data
        this.sharedArray = this.dummy;
  
        // ... other code
  
        // Now, sharedArray is updated
        console.log("shared inside oninit block", this.dummy);
  
        // Trigger any further operations here or call a separate method
        this.doSomethingWithSharedArray();
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  
    // The console.log outside the block might be executed before the response is received
    // Ensure that any operations depending on sharedArray are placed within the subscription block
    // Or, you can trigger them after the asynchronous operation is complete
    // console.log("shared outside block", this.sharedArray);
    // this.cartService.getCartData().subscribe((cartData) => {
    //   this.sharedArray = cartData;
    //   // Perform any additional operations with the initial cart items
    //   this.updateTotalPrice();
    // });
  
  }
  
  
  doSomethingWithSharedArray() {
    // Any operations that depend on sharedArray can be placed here
    this.sharedArray = this.dummy;
    console.log("shared outside oninit block", this.sharedArray);
    this.cdr.detectChanges();
    console.log("Change detection triggered");
  }
  
      
  assignValue(data:any[])
  {
    data.forEach(item => this.sharedArray.push(item));
  }
  goToPreviousPage(): void {
    this.location.back();
  }

  delivaryCharges:number=30;
  grandTotal:number=0
  totalCost=0;
  individual=0;
  cost:any;
  total: number = 0;
  totalFriuts:number=0;
  totalVegetables:number=0;
  totalOffersPrice:number=0;
  defalutMrp()
 {
  for (let index = 0; index < this.sharedArrayVegetable.length; index++) {
       
    this.total=this.total+this.sharedArrayVegetable[index].price
      }

  for (let index = 0; index < this.sharedArray.length; index++) {
        this.total=this.total+this.sharedArray[index].price
        
      }
  for (let index = 0; index < this.sharedArrayOffer.length; index++) {
    
    this.total=this.total+this.sharedArrayOffer[index].totalCost
  }
  this.grandTotalPrice();
 }
 grandTotalPrice()
 {
  this. grandTotal=(this.delivaryCharges+this.total);
  this.sharedDataService.grandTotalPrice(this.grandTotal);
 }
  calculateTotalPrice(item: any): number {
    
    if (item.offerPrice>0) {
      return item.offerPrice*item.count
    }
    else{

    return item.price * item.count;
    }
  }
  
  updateTotalPrice(): void {
    this.totalFriuts = this.sharedArray.reduce(
      (acc:any, item:any) => acc + this.calculateTotalPrice(item),
      0
    );
    this.totalVegetables = this.sharedArrayVegetable.reduce(
      (acc:any, item:any) => acc + this.calculateTotalPrice(item),
      0
    );
    this.totalOffersPrice = this.sharedArrayOffer.reduce(
      (acc:any, item:any) => acc + this.calculateTotalPrice(item),
      0
    );
    this.total=this.totalFriuts+this.totalVegetables+this.totalOffersPrice
    this.grandTotalPrice();
 
  } 
  sharedArray:any=[];
  sharedArrayVegetable:any=[]
  sharedArrayOffer:any=[];
  payments:any=[]
  noOfCartItems:any;

  
  constructor(
    private sharedDataService: DataTransferService,
    private location: Location,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private cartService:CartService,
    
   
    ) 
    {
      this.sharedDataService.getSharedArray();
      this.sharedArray =this.cartService.cartResponse;
    this.payments=this.sharedDataService.getPayMethod();
    this.sharedArrayVegetable=this.sharedDataService.getSharedArrayVegetable();
    this.sharedArrayOffer=this.sharedDataService.getSharedArrayOffers();
    this .noOfCartItems=this.sharedDataService.totalItems
   this. updateTotalPrice(); 


   this.cartService.getCartData().subscribe((cartData) => {
    this.sharedArray = cartData;
    this.updateTotalPrice();
  });
  console.log("inside cart items",this.sharedArray)
  }
  removeFruits(item:any)
  {
    this.sharedDataService.deltingItem(item)
    const index=this.sharedArray.indexOf(item)
    this.sharedArray.splice(index,1)
    this.updateTotalPrice();
  }
  set()
  {
    this .noOfCartItems=this.sharedDataService.totalItems
    console.log("no of item"+this.noOfCartItems)
  }
 
  
  
   
   selectAddress()
  {
    this.router.navigate(['src/app/address']);
  }
  addNewAdd()
  {
    this.router.navigate(['src/app/new-address'])
  }
  selectPayment()
  {
    this.router.navigate(['src/app/payment'])
  }
  selectChange()
  {
    this.router.navigate(['src/app/payment'])
  }
  
 }
