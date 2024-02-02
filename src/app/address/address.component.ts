import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  goToPreviousPage(): void {
    this.location.back();
  }
 
  addresses:any=[{
    tittle:'hello',
    add:'hello',
}];
constructor(private location: Location,
  private dataShared:DataTransferService,
  private router:Router
){

  this.newAddress=this.dataShared.setAddress()
}
newAddress:any[]=[]
sendAddress(address:any)
{
  //console.log(address)
}
 edit(address:any)
  {
    this.dataShared.editAddress(address)
    this.router.navigate(['src/app/new-address'])
  }
navTonewAddress()
{
  this.router.navigate(['src/app/new-address'])
}

 

}
