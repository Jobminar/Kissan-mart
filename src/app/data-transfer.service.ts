import { Injectable } from '@angular/core';
import { Subject, isEmpty } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SssionStorageService } from './sssion-storage.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  

  private notifyChildSubject = new Subject<void>();
  notifyChild$ = this.notifyChildSubject.asObservable();

  notifyChild(): void {
    this.notifyChildSubject.next();
  }
  constructor(private http:HttpClient,
    private sessionStorage: SssionStorageService,
    private cartService:CartService,
   private router:Router
    ) 
    { 
    const user = this.sessionStorage.get('userId');
    this.userId = user ? user._id : null;
    console.log("user Id",this.userId);

    
    // this.cartService.fetchData().subscribe(
    //   (response) => {
    //     console.log("res",response)
    //     this.cartService.formatData(response);
    //   },
    //   (error) => {
    //     console.error('API Error:', error);
    //   }
    // );
  }

  //ads----
  ads:any[]=[
    {
      src:'assets/Rectangle 2.jpg'
      
    },
    {
      src:'assets/Rectangle 2.jpg'
      
    },
    {
      src:'assets/Rectangle 2.jpg'
      
    },
    {
      src:'assets/Rectangle 2.jpg'
      
    },{
      src:'assets/Rectangle 2.jpg'
      
    }
  ]

  //ads ends
  //add buttons home
 
  //end
  totalFruits:any=0;
  totalVegetables:any=0;
  private sharedArray: any[] = [];
  setSharedArray(array: any[],button:any): void {
    //this.sharedArray = array;
    if (button==='Remove') {
      if(this.userId===null || this.userId===undefined){
        this.router.navigate(['src/app/log-in'])
      }
      else{
        this.sharedArray.push(array)
      this.addingItemsToCart();
      this.gettingItems()
      this.sharedArray=[]
      }
      
     
    } 
    if (button==='Add to Basket') {
      let index=this.sharedArray.indexOf(array)
      this.sharedArray.splice(index,1);
      let index2=this.cart.indexOf(array)
      console.log("want to remove this",array)
      // this.deltingItem(array)
      // this.deltingItem(array)
      this.cart.splice(index,1)
    }
    this.totalFruits=this.sharedArray.length
   
    this.noOf()
    
  }
  getSharedArray(): any[] {
    // this.addingItemsToCart();
    
    return this.sharedArray;
    
  }

  private sharedArrayVegetable: any[] = [];
  setSharedArrayVegetable(array: any[],button:any): void {

    //this.sharedArrayVegetable = array;
    //this.totalVegetables=it;
    if (button==='Remove') {
      
        if(this.userId===null || this.userId===undefined){
          this.router.navigate(['src/app/log-in'])
        }
        else{
          this.sharedArray.push(array)
        this.addingItemsToCart();
        this.gettingItems()
        this.sharedArray=[]
        }     
    } 
    if (button==='Add to Basket') {
      let index=this.sharedArrayVegetable.indexOf(array)
      this.sharedArrayVegetable.splice(index,1);
    }
   console.log(this.sharedArrayVegetable)
    this.noOf()
  }
  getSharedArrayVegetable(): any[] {
    // this.addingItemsToCart();
    return this.sharedArrayVegetable;
  }
  

  //offer Zone----
 private sharedArrayOffers:any[]=[];
 setsharedArrayOffer(array:any[],button:any):void
  {
    if (button==='Remove') {
      if(this.userId===null || this.userId===undefined){
        this.router.navigate(['src/app/log-in'])
      }
      else{
        this.sharedArray.push(array)
      this.addingItemsToCart();
      this.gettingItems()
      this.sharedArray=[]
      }     
    } 
    if (button==='Add to Basket') {
      let index=this.sharedArrayOffers.indexOf(array)
      this.sharedArrayOffers.splice(index,1);
    }
   // this.sharedArrayOffers=array
  }
  getSharedArrayOffers(): any[] {
    // console.log(this.sharedArrayOffers)
    // this.addingItemsToCart();
    return this.sharedArrayOffers;
  }

  //------offer zone end
  //adding cart ---s
  cart:any[]=[]
 
  addingItemsToCart() {
    
    for (let index = 0; index < this.sharedArray.length; index++) {
      const element = this.sharedArray[index];

      
      // Assuming productId is a unique identifier for items in your arrays
      if (!this.cartService.cartResponse.find(item => item._id === element.productId)) {
        this.cart.push(element);
        
      }
    }

  
     for (let index = 0; index < this.sharedArrayVegetable.length; index++) {
      const element = this.sharedArrayVegetable[index];
  
      // Assuming productId is a unique identifier for items in your arrays
      if (!this.cart.find(item => item.itemname === element.itemname)) {
        this.cart.push(element);
      }
    }
  
    for (let index = 0; index < this.sharedArrayOffers.length; index++) {
      const element = this.sharedArrayOffers[index];
  
      // Assuming productId is a unique identifier for items in your arrays
      if (!this.cart.find(item => item.itemname === element.itemname)) {
        this.cart.push(element);
      }
    }
  
    console.log(this.cart);
   
    this.postDataToBackend(this.cart);
    this.cart=[];
    
    // const combinedArray = [...this.sharedArray, ...this.sharedArrayVegetable, ...this.sharedArrayOffers];

    // for (const element of combinedArray) {
    //   // Assuming productId is a unique identifier for items in your arrays
    //   if (!this.cart.find(item => item.itemname === element.itemname)) {
    //     this.cart.push(element);
    //     this.postDataToBackend(element);
    //   }
    // }
  }
  //  apiUrl = 'https://kisanmart.onrender.com/cart';

  userId: string | null = null;

  postDataToBackend(cartArray: any[]) {
    const apiUrl = 'https://kisanmart.onrender.com/cart';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // You can add more headers if needed
    });
    
    for (let index = 0; index < cartArray.length; index++) {
      const element = cartArray[index];
      
       const temp = {
        
       category:element.category,
       itemname:element.itemname,
       units:element.units,
       costPerUnit:element.costPerUnit,
       discount:element.discount,
       description:element.description,
       itemImage:element.src,
       userId:this.userId,
       payment:"yes",
       count:element.count,
       orderStatus:"Pending",
       price:element.costPerUnit*element.count
      };
      this.http.post(apiUrl, temp, { headers } ).subscribe(
        (response) => {
          console.log('POST request successful:', response);
          
        },
        (error) => {
          console.error('Error making POST request:', error);
        }
      );
      this.cart=[]
      
    }
    console.log("inside post", cartArray);

    
    // const apiUrl = 'https://kisanmart.onrender.com/cart';
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    //   // You can add more headers if needed
    // });

    // const temp = {
    //   category: item.category,
    //   itemname: item.itemname,
    //   units: item.units,
    //   costPerUnit: item.costPerUnit,
    //   discount: item.discount,
    //   description: item.description,
    //   itemImage: item.src,
    //   userId: this.userId,
    //   payment: 'yes',
    //   count: item.count,
    //   orderStatus: 'Pending',
    //   price: item.costPerUnit * item.count
    // };

    // this.http.post(apiUrl, temp, { headers }).subscribe(
    //   (response) => {
    //     console.log('POST request successful:', response);
    //   },
    //   (error) => {
    //     console.error('Error making POST request:', error);
    //   }
    // );
    this.cart=[]
    console.log("checking cart",this.cart)
    this.gettingItems()
  }

//-----getting from cartapi
//-----deleting the item s
itemId:string=''
deltingItem(item:any)
{
    const apiUrl = 'https://kisanmart.onrender.com/cart/delete';
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // You can add more headers if needed
  });

  const options = {
    headers: headers,
    body: { itemId: item._id }, // Include the item ID in the request body
  };

  this.http.delete(apiUrl, options).subscribe(
    (response) => {
      console.log('Delete request successful:', response);
      // Remove the item from the local cart array
      let index = this.cart.indexOf(item);
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
    },
    (error) => {
      console.error('Error making DELETE request:', error);
    }
  );
}

//-----deketing e
gettingItems()
{
  // this.cartService.fetchData().subscribe(
  //   (response) => {
  //     console.log("res getting",response)
  //     this.cartService.formatData(response);
  //   },
  //   (error) => {
  //     console.error('API Error:', error);
  //   }
  // );   
  console.log("inside getting")
  this.cartService.fetchData().subscribe(
    (response) => {
      console.log("res getting", response);
      this.cartService.formatData(response);
     
      this.notifyChild(); // Notify child components about the data update
    },
    (error) => {
      console.error('API Error:', error);
    }
  );
}


  
  //adding cart ---e

  // totalItems:number=this.cartService.cartResponse.length;
  //counting no of items prasent inside the cart
  noOf()
  {
   
    // this.totalItems=this.totalVegetables+this.totalFruits
   
  }
  totalItems:any=0
  addItemsCount(add:any)
  {
    
    if (add==true) {
      this.totalItems++
    } else {
      this.totalItems--;
    }
   
  }
  getAddItemsCount():any
  {
    console.log("inside service total items",this.totalItems)
    return this.totalItems

  }

  //total amount
  grandTotal:number=0
  grandTotalPrice(grandTotal:number)
  {
    this.grandTotal=grandTotal;
  }
  getgrandTotalPrice():number
  {
    return this.grandTotal;
  }
  private PaymentMethod: any[]= [];
   setPayment(array1:any[]):void
  {
    this.PaymentMethod=array1
  }
  getPayMethod() : any[]
  {
    return this.PaymentMethod
  }

  //address------
  private addressShared:any[]=[
    {
      tittle:'Home',
      House_no:'12-01',
      block:'A',
      address:'beerum guda',
      appartment:'lela vathi',
      city:'hyderabad',
      state:'telangana',
      country:'india',
      pincode:'502032'
    }
  ];
  getAddress(add:any)
  {
    if (this.addressShared.includes(add)) {
    
    } else {
      this.addressShared.push(add)
    }
   

  }
  setAddress():any
  {
    return this.addressShared
  }
  editingAddress:any[]=[]
  editAddress(address:any)
  {
    this.editingAddress.push(address)
    console.log("set",this.editingAddress)
   
  }
  getEdditing():any
  {
    console.log("seting and geting",this.editingAddress)
    return this.editingAddress
  }
  //password

  password:any;
  setPassword(pass:any)
  {
    this.password=pass
  }
  getPassword()
  {
    return this.password;
  }
  //signUpMain Start----
  userName:string='';
  phoneNo:number=0;
  passwordShared:string='';
  setSignUpDetails(phone:number,password:any,userName:any)
  {
    this.userName=userName;
    this.phoneNo=phone;
    this.passwordShared=password;
    console.log("phone",this.phoneNo,"password",this.passwordShared)
  }
  getSignUpDetails()
  {
    return this.phoneNo,this.passwordShared,this.userName
  }
}
