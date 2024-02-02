import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, count } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient,private sanitizer: DomSanitizer) {
    this.assigningToCat()
  }
  
  // offers:any=[
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:20,
  //     name:'onion',
  //     price:120,
  //     count:1,
  //     offerPrice:94,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'25',
  //     name:'onion',
  //     count:1,
  //     price:120,
  //     offerPrice:94,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'12',
  //     price:120,
  //     name:'onion',
  //     offerPrice:94,
  //     count:1,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'10',
  //     price:120,
  //     name:'onion',
  //     totalCost:94,
  //     offerPrice:94,
  //     count:1,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'23',
  //     name:'onion',
  //     price:120,
  //     offerPrice:94,
  //     count:1,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  // ]
  private apiUrl = 'https://kisanmart.onrender.com/inventory';

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  offers: any[] = [
    {
     
    }
  ];
  quickPickup:any[]=
  [
    {}
  ];
  productsItems: any[] = [];
  isRemoved: boolean = false;
  dummyCat:any=[]
  dummyCount=0;
 formatData(response: any): void {
   
   console.log("result",response.items)
   const dumArry=response.items
   
     
    
     if (Array.isArray(dumArry)) {
       // Assuming response is an array of categories
       this.dummyCat = dumArry.map((category: any) => ({
        
         name: category.category,
        productId:category._id,
         src: `data:image/*;base64,${category.itemImage}`,
         alt: 'Product 1',
         itemname:category.itemname,
         costPerUnit: category.costPerUnit,
         count: 1,
         discount:category.discount,
         totalCost:category.costPerUnit,
         button: { buttonColor: '#00853E', originalColor: '#FF2400', buttonText: 'Add to Basket', originalText: 'Remove' } 
       
       
       
       }));
       this.dummyCount++
       console.log("dummy",this.dummyCat,"dummyCount",this.dummyCount)
       
       this.productsItems = [].concat(...this.offers.map(category => category.products));
       
      } else {
     
       console.error('Invalid response format. Expected an array.', response);
     }
   
 }
 assigningToCat() {
  for (let index = 0; index < this.dummyCat.length; index++) {
    
    
     
      // Push individual elements using spread operator if not already present
      if (this.dummyCat[index].name==='offerZone') {
        
      
        if (!this.offers.some(category => category.productId === this.dummyCat[index].productId)) {

          this.offers.push(this.dummyCat[index]);
        }
      }
      if(this.dummyCat[index].name==='quickPicks')
      {
        if (!this.quickPickup.some(category => category.productId === this.dummyCat[index].productId)) {

          this.quickPickup.push(this.dummyCat[index]);
        }
      }
    

 
}

console.log("this is pushed ", this.offers);
}
 
 
  // quickPickup:any=[
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:20,
  //     name:'onion',
  //     price:120,
  //     count:1,
  //     offerPrice:94,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'25',
  //     name:'onion',
  //     count:1,
  //     price:120,
  //     offerPrice:94,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'12',
  //     price:120,
  //     name:'onion',
  //     offerPrice:94,
  //     count:1,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'10',
  //     price:120,
  //     name:'onion',
  //     totalCost:94,
  //     offerPrice:94,
  //     count:1,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  //   {
  //     src:'assets/Rectangle 5.png',
  //     off:'23',
  //     name:'onion',
  //     price:120,
  //     offerPrice:94,
  //     count:1,
  //     totalCost:94,
  //     button: { buttonColor: '#00853E',
  //              originalColor: '#FF2400',
  //               buttonText: 'Add to Basket', 
  //               originalText: 'Remove' }
  //   },
  // ]
  
  private buttonState: { color: string; text: string } = {
    color: '#00853E',
    text: 'Add to Basket',
  };

  getButtonState(): { color: string; text: string } {
    return this.buttonState;
  }

  updateButtonState(color: string, text: string,index:any): void {
    // this.offers.index.button.color=color;
    // this.offers.index.button.color=text;

  }
}
