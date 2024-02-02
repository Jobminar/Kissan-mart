import { Component,ViewChild,OnInit } from '@angular/core';
import { FotterComponent } from '../fotter/fotter.component';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { DataTransferService } from '../data-transfer.service';
import { green } from '@mui/material/colors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
term:any;
@ViewChild('fotter') fotter!: FotterComponent;
  offers:any=this.sharedService.offers

quickPickUp:any=this.sharedService.quickPickup

constructor(private router: Router,
  public sharedService:SharedService,
  public dataTransferService:DataTransferService
  ) {  this.ads=this.dataTransferService.ads;
    this.sharedService.fetchData().subscribe(data => {
      // Handle the data and format it
      this.sharedService.formatData(data);
      this.sharedService.assigningToCat();
    });
    console.log("inside con",this.offers)
  }

  ads:any[]=[];

  ngOnInit(): void {
    this.ads=this.dataTransferService.ads;
    console.log(this.dataTransferService.ads)

    this.sharedService.fetchData().subscribe(data => {
      // Handle the data and format it
      this.sharedService.formatData(data);
      this.sharedService.assigningToCat();
    });
    console.log("offers",this.offers)
  }

navigateToDestination() {
  this.router.navigate(['src/app/fresh-fruits.html']);
}
navgateToFreshVegetables()
{
  this.router.navigate(['src/app/fresh-vegetables.html'])
}


showAlert:boolean=true
//add button start-----

// getButtonState(): { color: string; text: string } {
//   console.log(this.dataTransferService.getButtonState())
//   return this.dataTransferService.getButtonState();
// }

toggleButtonState(offer:any): void {
  // const currentState = this.getButtonState();
  const button=offer.button
  button.buttonColor = button.buttonColor === '#00853E' ? '#FF2400' : '#00853E';
  button.buttonText = button.buttonText === 'Add to Basket' ? 'Remove' : 'Add to Basket';
  console.log(button.buttonColor)
  const index=offer
  this.sharedService.updateButtonState(button.buttonColor, button.buttonText,index);
}
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
  this.showAlerts = true;
  product.count=1;
  
  product.totalCost=product.price
}
showAlerts = true;

  show() {
    this.showAlerts = false;
    
  }
itemIns:number=0
noOfItems:number=0;
itemArray:any=[];
addItems:boolean=false;
addingItems(product:any)
{
  if (product.button.buttonText=='Add to Basket') {
    
    this.dataTransferService.setsharedArrayOffer(product,product.button.buttonText)
    let index=this.itemArray.indexOf(product)
    this.itemArray.splice(index,1);
    this.itemIns--;
    this.addItems=false;
    this.dataTransferService.addItemsCount(this.addItems)
    // this.fotter.countingCartVegetables( this.itemIns);
    this.fotter.countingCart()
  } 
  if(product.button.buttonText=='Remove')
  {
   
    this.dataTransferService.setsharedArrayOffer(product,product.button.buttonText)
      this.itemArray.push(product)
      this.noOfItems=this.itemArray.length
      this.itemIns++;
      this.addItems=true
      this.dataTransferService.addItemsCount(this.addItems)
      this.fotter.countingCart()
      // this.fotter.countingCartVegetables( this.itemIns);
  }
 
}
public share()
{
  //this.dataTransferService.setsharedArrayOffer(this.itemArray);
}
navToVoice()
{
  this.router.navigate(['src/app/Voice'])
}
}
