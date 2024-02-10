import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SssionStorageService } from '../sssion-storage.service';
import { NavigationService } from '../navigation.service';
import { forkJoin, Observable } from 'rxjs';




@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit{

  address:any[]=[
    

  ];
  excludedKeys: string[] = ['__v', '_id', 'userId','Type'];
   dummy:any[]=[]
   sharedArray:any=this.cartService.cartResponse;

   ngOnInit(): void {
   
    this.cartService.fetchData().subscribe(
      (response) => {
        console.log("I'm getting", response);
        this.dummy = response;
        this.assignValue(response); // Assign data to sharedArray
        this.cartService.formatData(response);

        // Trigger any further operations here or call a separate method
        // this.doSomethingWithSharedArray();
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
  this.address=this.sharedDataService.addressShared
  this.navigator.setupBackButtonListener();
  }
  
  
  doSomethingWithSharedArray() {
    // Any operations that depend on sharedArray can be placed here
    this.sharedArray = this.dummy;
    localStorage.setItem('cartItems', JSON.stringify(this.sharedArray)); // Save to local storage
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
  
  sharedArrayVegetable:any=[]
  sharedArrayOffer:any=[];
  payments:any=[]
  noOfCartItems:any;
  userId:string='';
  
  constructor(
    private sharedDataService: DataTransferService,
    private location: Location,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private cartService:CartService,
    private http:HttpClient,
    private sessionStorage:SssionStorageService,
    private navigator:NavigationService
    ) 
    {
      this.sharedDataService.getSharedArray();
      this.sharedArray =this.cartService.cartResponse;
      // this.sharedArray = JSON.parse(localStorage.getItem('cartItems')) || [];
        this.payments=this.sharedDataService.getPayMethod();
        this.sharedArrayVegetable=this.sharedDataService.getSharedArrayVegetable();
        this.sharedArrayOffer=this.sharedDataService.getSharedArrayOffers();
        this .noOfCartItems=this.sharedDataService.totalItems
      this. updateTotalPrice(); 


      this.cartService.getCartData().subscribe((cartData) => {
        this.sharedArray = cartData;
        this.updateTotalPrice();
      });
     
      // this.address=this.sharedDataService.addressShared;
      // console.log("address in cart",this.address)
      this.assigingAddress(this.sharedDataService.addressShared)
      this.userId=this.sessionStorage.userId;
  }

  addressId:string='';
  assigingAddress(add:any)
  {
    for (let index = 0; index < add.length; index++) {
      this.address=[{
        title : add[index].title,
        address:add[index].address,
        city:add[index].city,
        state:add[index].state
    }]
      this.addressId=add[index]._id;
      console.log("inside the assign addressId",this.addressId)
    }
    
    // this.address.push(this.sharedDataService.addressShared)
    console.log("inside the assign",this.address)
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
  

  



 

  SendingCartToOrder() {
      console.log("Inside SendingCartToOrder. Shared Array:", this.sharedArray);
      
      const apiUrl = 'https://kisanmart.onrender.com/orders';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
        // You can add more headers if needed
      });
    
      const add: any = this.sharedDataService.addressShared;
      console.log("Address from shared data:", add);
    
      const httpRequests = [];
    
      for (let index = 0; index < this.sharedArray.length; index++) {
        const element = this.sharedArray[index];
    
        const temp = [
        
             
                {payment: "yes",
                 count: element.count,
                  orderStatus: "Pending",
                  price: element.costPerUnit * element.count,
                    userId: add.userId,
                    addressId: add._id,
                      cartIds:element._id}
        ];
    
        console.log("Preparing to send order:", temp);
    
        // Pushing the observable itself, not the subscription
        const request = this.http.post(apiUrl, temp, { headers: headers });
        
        // Log the request before subscribing
        console.log("Request before subscribing:", request);
        
        httpRequests.push(request);
      }
    
      // Use forkJoin to execute all requests in parallel
      forkJoin(httpRequests).subscribe(
        (responses: any[]) => {
          console.log('All orders POST requests successful:', responses);
          this.removingfromCart(this.sharedArray)
        },
        (error) => {
          console.error('Error making POST requests:', error);
        }
      );

      
  }
  removingfromCart(removeArray:any)
  {
    for (let i= 0; i <removeArray.length; i++) {
      const element = removeArray[i];
     
     setTimeout(() => {
      this.removeFruits(element)
     }, 500);
      
    }
  }
  

 }
