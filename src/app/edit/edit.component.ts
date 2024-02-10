import { Component,ViewChild, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { HttpClient } from '@angular/common/http';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  ngOnInit(): void {
    // if (this.dataShared.editingAddress.length>0) {
    //   this.formData=this.dataShared.editingAddress
    // }
    this.navigator.setupBackButtonListener()
    console.log("inside new address",this.dataShared.getEdditing())
  }
 
  goToPreviousPage(): void {
    this.location.back();
  }
  constructor(private location: Location,
              private dataShared:DataTransferService,
              private http:HttpClient,
              private navigator:NavigationService)
  {
    this.dataShared.getAddress(this.AddressStored)
  }
 
  formData=
    {
      userId:this.dataShared.userId,
      title:'',
      House_no:'',
      
      address:'',
     
      city:'',
      state:'',
      country:'',
      pincode:''

    }
    submitted = false;
    submitForm()
    {
      this.submitted=true
      console.log(this.formData)
      const apiUrl='https://kisanmart.onrender.com/addresses';
      this.http.post(apiUrl,this.formData).subscribe(
        (response)=>{
          console.log("this address is post sucessfully",response)
        },
        (error) => {
          console.error('Error making POST request:', error);
        }
      )

    }
    
    AddressStored:any=[]
    sharingAddress()
    {
      this.AddressStored.push(this.formData)
      
    }
    
}

  