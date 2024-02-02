import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {
  goToPreviousPage(): void {
    this.location.back();
  }
  constructor(private location: Location,
    private dataShared:DataTransferService){
    this.dataShared.getAddress(this.AddressStored)
  }
  ngOnInit(): void {
      // if (this.dataShared.editingAddress.length>0) {
      //   this.formData=this.dataShared.editingAddress
      // }
      console.log("inside new address",this.dataShared.getEdditing())
  }
  formData=
    {
      tittle:'home',
      House_no:'',
      block:'',
      address:'',
      appartment:'',
      city:'',
      state:'',
      country:'',
      pincode:''

    }
    submitted = false;
    submitForm()
    {
      this.submitted=true
      //console.log(this.formData.tittle)
    }
    
    AddressStored:any=[]
    sharingAddress()
    {
      this.AddressStored.push(this.formData)
      
    }
    
}
