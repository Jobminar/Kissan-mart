import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { NavigationService } from '../navigation.service';


const { App } = Plugins;
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{


  ngOnInit(): void {
   
    this.navigator.setupBackButtonListener()
  }

  goToPreviousPage(): void {
    this.location.back();
  }
 
  


  addresses:any=[{
    tittle:'hello',
    add:'hello',
}];
constructor(private location: Location,
  private dataShared:DataTransferService,
  private router:Router,
  private http :HttpClient,
  private navigator:NavigationService
){
this.userId=this.dataShared.userId
  this.newAddress=this.dataShared.setAddress()
  this.gettingAddress();
}
newAddress:any[]=[]
userId:any=""

apiUrl='https://kisanmart.onrender.com/addresses/getByUserId';
gettingAddress()
{
  
  this.fetchData().subscribe(
    (response: any) => {
      console.log("addres response",response)
      this.formatData(response);
    },
    (error) => {
      console.error('Error fetching address:', error);
    }
  );
}
 requestBody:any="";
fetchData(): Observable<any> {
 
   this.requestBody = { userId: this.userId };
   console.log("user id in address",this.requestBody)
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // Adjust the content type if needed
    const options = { headers: headers };
  return this.http.post<any>(this.apiUrl,this.requestBody);
}

formatData(response: any): void {
  this.newAddress = response; // Assuming that the response is an array of addresses
  console.log("newAddress", this.newAddress);
  // Notify subscribers about the data update if needed
}


sendAddress(address:any)
{
  this.dataShared.getAddress(address)
  console.log("address selected",address)
  this.router.navigate(['src/app/my-cart'])
}


 edit(address:any)
  {
    this.dataShared.editAddress(address)
    this.router.navigate(['src/app/edit'])
  }


  deletes(address:any)
  {
            console.log("going to delete",address)
            const apiUrl = 'https://kisanmart.onrender.com/addresses/deleteByUserId';
          const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            // You can add more headers if needed
          });

          const options = {
            headers: headers,
            body: { addressId: address._id,userId:this.userId }, // Include the item ID in the request body
          };

          this.http.delete(apiUrl, options).subscribe(
            (response) => {
              console.log('Delete request successful:', response);
              // Remove the item from the local cart array
              let index = this.newAddress.indexOf(address);
              if (index !== -1) {
                this.newAddress.splice(index, 1);
              }
            },
            (error) => {
              console.error('Error making DELETE request:', error);
            }
          );

  }
navTonewAddress()
{
  this.router.navigate(['src/app/new-address'])
}

 

}
