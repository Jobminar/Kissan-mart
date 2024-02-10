import { Component, ViewChild ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';
import { Location } from '@angular/common';
import { FotterComponent } from '../fotter/fotter.component';
import { VegetablesService } from '../vegetables.service';
import Swal from 'sweetalert2';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-fresh-vegetables',
  templateUrl: './fresh-vegetables.component.html',
  styleUrls: ['./fresh-vegetables.component.css']
})
export class FreshVegetablesComponent implements OnInit{


  logInStatus:boolean=false;
  inventoryData: any;
  ngOnInit(): void {
    // this.fotter.countingCart();
   
    this.vegetablesService.fetchData().subscribe(data => {
      // Handle the data and format it
      this.vegetablesService.formatData(data);
      this.vegetablesService.assigningToCat();
    });
    this.navigator.setupBackButtonListener()
  }
  constructor(private router: Router,
              private sharedDataService:DataTransferService,
              private location: Location,
              private vegetablesService:VegetablesService,
              private navigator:NavigationService) { 
      
    }
  @ViewChild('fotter') fotter!: FotterComponent;
  goToPreviousPage(): void {
    this.location.back();
  }

term:any;
categories=this.vegetablesService.categories

productItems:any[]=this.vegetablesService.categories[0]?.products||[]
navigateToFreshFruits(category:any) {
  this.productItems=category.products
}

//scearch button start
searchTerm:any = '';
cat:any=""

  filterProducts(): void {
    const filteredProducts = this.categories
  .filter(category => category.category === 'freshVegitables'|| category.category==='additionals'|| category.category==='leafyVegetables') // Filter only the category named 'fruits'
  .flatMap(category => category.products) // Flatten the array of products
  .filter(product => 
    product && 
    product.itemname && 
    product.itemname.toLowerCase().includes(this.searchTerm.toLowerCase()) // Filter products by item name
  );
  this.productItems=filteredProducts
 
}
//scearch button en

buttonColor: string = '#00853E';
originalColor:string='#FF2400';
buttonText:string='Add to Basket';
originalText='Remove';
changeColor(product: any) {
  const button = product.button;
  button.buttonColor = button.buttonColor === button.originalColor ? '#00853E' :'#00853E';
  button.buttonText = button.buttonText === button.originalText ? 'Add to Basket' : 'Add to Basket';
  this.fotter.countingCartVegetables( this.itemIns);
  const index=product
  this.vegetablesService.productsItems=this.productItems
  this.vegetablesService.updateButtonState(button.buttonColor, button.buttonText,index);
  // this.itemsInCart=this.sharedDataService.totalItems
}
cost:any=0

increaseCount(product: any) {
  product.count++;
 product.totalCost=product.price*product.count
}

decreaseCount(product: any) {
  if (product.count > 1) {
    product.count--;
    product.totalCost=product.totalCost-product.price
  }
  if(product.count>5)
    {
      product.totalCost=product.price
    }
}
hideAlert(product:any) {
  this.showAlert = true;
  product.count=1;
  
  product.totalCost=product.price
}




showAlert = true;

  show() {
    this.showAlert = false;
    
  }

 

  itemIns:number=0
  noOfItems:number=0;
  itemArray:any=[];
  addItemss:boolean=false;
  addingItems(product:any)
  {
    // if (product.button.buttonText=='Add to Basket') {
    //   this.sharedDataService.setSharedArrayVegetable(product,product.button.buttonText)
    //   let index=this.itemArray.indexOf(product)
    //   this.itemArray.splice(index,1);
    //   this.itemIns--;
    //   this.addItemss=false;
    //   this.sharedDataService.addItemsCount(this.addItemss)
    //   this.fotter.countingCart();
       
    // } 
    if(product.button.buttonText=='Add to Basket')
    {
     
      
        this.itemArray.push(product)
        this.sharedDataService.setSharedArrayVegetable(product,product.button.buttonText)
        this.noOfItems=this.itemArray.length
        // this.itemIns++;
        this.addItemss=true;
        this.sharedDataService.addItemsCount(this.addItemss)
        this.fotter.countingCart();
        this.logInStatus=this.sharedDataService.logInStatus;
      
        console.log("log in status",this.logInStatus)
        this.hideLogInAlert()

        
     
    }
   
  }
  hideLogInAlert()
  {
    if (this.logInStatus===true) {
      Swal.fire({
        title: 'Need to log in first',
        icon: 'warning',
        confirmButtonText: 'OK'
      }).then(() => {
        this.router.navigate(['src/app/log-in']);
      });
      this.logInStatus=false;
      this.sharedDataService.logInStatus=false;
  
    }
        // this.router.navigate(['src/app/log-in'])
  }
  
  public share()
  {
   // this.sharedDataService.setSharedArrayVegetable(this.itemArray,this.noOfItems);
  }
  

  //footer
  // itemsInCart:number=0
  // navToHome()
  // {
  //   this.router.navigate(['src/app/home.html']);
  // }
  // navToCart()
  // {
  //   this.router.navigate(['src/app/my-cart']);
  // }
  // navToProfile()
  // {
  //   this.router.navigate(['src/app/profile']);
  // }
  // navtoNotification()
  // {
  //   this.router.navigate(['src/app/notification'])
  // }
  // navToOrders()
  // {
  //   this.router.navigate(['src/app/orders'])
  // }


  
}