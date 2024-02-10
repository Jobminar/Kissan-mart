import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = 'https://kisanmart.onrender.com/cart/65b92ac73cafc5630073307b';
  private cartSubject = new Subject<any[]>();

  constructor(private http: HttpClient,
    ) {
      
      
     }

  fetchData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  cartResponse: any[] = [];
  gettingCartItem:any[]=[];
  formatData(response: any): void {
    this.cartResponse = response;
    console.log("resp in orders", this.cartResponse);
    
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
