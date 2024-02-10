import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  name:any="";
  phoneNo:number=0;
  goToPreviousPage(): void {
    this.location.back();
  }
  Slides:any=[
    {
      title:'Address',
      src:'assets/profile/location.png',
      navigate:'src/app/address'
    },
    {
      title:'Refunds',
      src:'assets/profile/money.png',
      navigate:'src/app/refunds'
    },
    {
      title:'Past Order',
      src:'assets/profile/past.png',
      navigate:'src/app/past-order'
    },
    {
      title:'Store Location',
      src:'assets/profile/location.png',
      navigate:'src/app/office-location'
    },
    {
      title:'Help',
      src:'assets/profile/help.png',
      
    }
  ]

  ngOnInit(): void {
      this.navigator.setupBackButtonListener();
  }
  constructor(private router:Router,private location: Location,
              private dataTransferService:DataTransferService,
              private navigator:NavigationService){
      this.name=this.dataTransferService.userNames;
      this.phoneNo=this.dataTransferService.UserNumber
    }
  navTo(slide:any)
  {
    this.router.navigate([slide.navigate])
  }
  edit()
  {
    this.router.navigate(['src/app/edit-profile'])
  }
}
