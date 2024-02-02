// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {

//   constructor(private http:HttpClient,private sanitizer: DomSanitizer) { }
//   private apiUrl = 'https://kisanmart.onrender.com/cart/65b92ac73cafc5630073307b';
//   fetchData(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }
//   cartResponse:any[]=[];
//   formatData(response: any): void {
//     this.cartResponse=response
//     console.log("resp",this.cartResponse)
//   }

// }
// 



import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://kisanmart.onrender.com/cart/65b92ac73cafc5630073307b';
  private cartSubject = new Subject<any[]>();

  constructor(private http: HttpClient,
    ) {
      if (this.cartResponse.length>0) {
        
      }
      
     }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  cartResponse: any[] = [];
  gettingCartItem:any[]=[];
  formatData(response: any): void {
    this.cartResponse = response;
    console.log("resp", this.cartResponse);
    
    // Notify subscribers about the data update
    this.cartSubject.next(this.cartResponse);
  }
  assigningToCat() {
    this.gettingCartItem=this.cartResponse
  }
  getCartData(): Observable<any[]> {
    console.log("checking the cartSubjecy",this.cartResponse)
    return this.cartSubject.asObservable();
  }
  totalItems:number=this.cartResponse.length
}
