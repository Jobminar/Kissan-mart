import { Component,OnInit , ViewChild} from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FotterComponent } from '../fotter/fotter.component';
import { FruitsService } from '../fruits.service';
import { VegetablesService } from '../vegetables.service';
import Swal from 'sweetalert2';
import { NavigationService } from '../navigation.service';



@Component({
  selector: 'app-fresh-fruits',
  templateUrl: './fresh-fruits.component.html',
  styleUrls: ['./fresh-fruits.component.css']
})
export class FreshFruitsComponent implements OnInit {
  @ViewChild('fotter') fotter!: FotterComponent;


  logInStatus:boolean=false;
  inventoryData: any;
  goToPreviousPage(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.navigator.setupBackButtonListener()
  }
  constructor(private sharedDataService:DataTransferService,
              private location: Location,
              private router:Router,
              private fruits:FruitsService,
              private navigator:NavigationService
    ){
      
      // console.log("log in status",this.logInStatus)
      this.fruits.fetchData().subscribe(data => {
        // Handle the data and format it
        this.fruits.formatData(data);
        this.fruits.assigningToCat();
      });
      // this.assignToProducts()
      
    console.log("categories in ng",this.categories)
    if (this.categories.length===0) {
      this.assignToProducts()
    }
    }
  

 categories:any[]=[]
  // productItems:any[]=this.fruits.categories[0]?.products||[]
  productItems:any[]=[]
  products:any[]=this.fruits.categories[0]?.products||[];
  dummyCat=this.fruits.categories
  assignToProducts() {
    if (this.categories.length === 0) {
      this.categories = this.fruits.categories;
    } 
    
  }
  
  
  navigateTo(category:any) {
   this.productItems=category.products
  }
 
  //scearch button start
  searchTerm:any = '';
   
  searchProducts() {
    // Filter products based on the search term
 
    
    // console.log("this is fruiyts",this.fr)
    const filteredProducts = this.categories
  .filter(category => category.category === 'freshFruits') // Filter only the category named 'fruits'
  .flatMap(category => category.products) // Flatten the array of products
  .filter(product => 
    product && 
    product.itemname && 
    product.itemname.toLowerCase().includes(this.searchTerm.toLowerCase()) // Filter products by item name
  );


    this.productItems=filteredProducts
    console.log(filteredProducts);
    }
  //scearch button ends
   
  navigation()
  {
    this.router.navigate(['src/app/fresh-vegetables.html'])
  }
  
  
  

  buttonColor: string = '#00853E'
  originalColor:string='#FF2400'
  buttonText:string='Add to Basket'
  originalText='Remove'
  changeColor(product: any) {
    const button = product.button;
    button.buttonColor = button.buttonColor === button.originalColor ? '#00853E' : '#00853E';
    button.buttonText = button.buttonText === button.originalText ? 'Add to Basket' : 'Add to Basket';
    this.fruits.productsItems=this.productItems
  this.fruits.updateButtonState(button.buttonColor, button.buttonText,product);
    this.fotter.countingCart()
  }
  

  //assign to fruits
 
  
  temp:boolean=true;
  increaseCount(product: any) {
    
    product.count++;
    product.totalCost=product.price*product.count
  }
  largerQuantity(product:any)
{
  alert("hhhh")
}
  decreaseCount(product: any) {
    if (product.count > 1) {
      product.count--;
      product.price=product.price-120
    }
    if(product.count>5)
    {
      product.totalCost=product.price
    }
  }
  hideAlert(product:any) {
    this.showAlert=true;
    
    product.count=1;
    product.totalCost=product.price
  }
  showAlert = true;

  show() {
    this.showAlert =false; 
  }

 

  itemsin:number=0;
  itemArray:any=[];
  addItems:boolean=false;
  addingItems(product:any)
  {
    // if (product.button.buttonText==='Add to Basket') {
     
    //   this.sharedDataService.setSharedArray(product,product.button.buttonText)
    //   let index=this.itemArray.indexOf(product)
    //   this.itemArray.splice(index,1);
    //   this.itemsin--;
    //   this.addItems=false;
    //   this.sharedDataService.addItemsCount(this.addItems)
    //   this.fotter.countingCart()
    // } 
    if(product.button.buttonText==='Add to Basket')
    {
     
      this.sharedDataService.setSharedArray(product,product.button.buttonText)
      this.itemArray.push(product)
      this.itemsin++
      this.addItems=true;
      this.sharedDataService.addItemsCount(this.addItems)
      this.fotter.countingCart()
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
    //this.sharedDataService.setSharedArray(this.itemArray);
  }
 
}
