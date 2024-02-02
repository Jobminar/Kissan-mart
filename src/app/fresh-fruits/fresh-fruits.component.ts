import { Component,OnInit , ViewChild} from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FotterComponent } from '../fotter/fotter.component';
import { FruitsService } from '../fruits.service';
import { VegetablesService } from '../vegetables.service';
@Component({
  selector: 'app-fresh-fruits',
  templateUrl: './fresh-fruits.component.html',
  styleUrls: ['./fresh-fruits.component.css']
})
export class FreshFruitsComponent implements OnInit {
  @ViewChild('fotter') fotter!: FotterComponent;

  inventoryData: any;
  goToPreviousPage(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.fruits.fetchData().subscribe(data => {
      // Handle the data and format it
      this.fruits.formatData(data);
      this.fruits.assigningToCat();
    });
  }
  constructor(private sharedDataService:DataTransferService,
    private location: Location,
    private router:Router,
    private fruits:FruitsService
    ){

    }
  categories=this.fruits.categories

  productItems:any[]=this.fruits.categories[0]?.products||[]
  navigateTo(category:any) {
   this.productItems=category.products
  }
 
  //scearch button start
  searchTerm:any = '';
  searchProducts() {
    // Filter products based on the search term
    const filteredProducts = this.categories.flatMap(category => category.products)
    .filter(product => product && product.name && product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));


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
    button.buttonColor = button.buttonColor === button.originalColor ? '#00853E' : button.originalColor;
    button.buttonText = button.buttonText === button.originalText ? 'Add to Basket' : button.originalText;
    this.fruits.productsItems=this.productItems
  this.fruits.updateButtonState(button.buttonColor, button.buttonText,product);
    this.fotter.countingCart()
  }
 
 
  
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
    if (product.button.buttonText==='Add to Basket') {
     
      this.sharedDataService.setSharedArray(product,product.button.buttonText)
      let index=this.itemArray.indexOf(product)
      this.itemArray.splice(index,1);
      this.itemsin--;
      this.addItems=false;
      this.sharedDataService.addItemsCount(this.addItems)
      this.fotter.countingCart()
    } 
    if(product.button.buttonText==='Remove')
    {
      this.sharedDataService.setSharedArray(product,product.button.buttonText)
      this.itemArray.push(product)
      this.itemsin++
      this.addItems=true;
      this.sharedDataService.addItemsCount(this.addItems)
      this.fotter.countingCart()
    }
   
  }
  
  public share()
  {
    //this.sharedDataService.setSharedArray(this.itemArray);
  }
 
}
