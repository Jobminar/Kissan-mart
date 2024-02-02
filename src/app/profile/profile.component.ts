import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

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
  constructor(private router:Router,private location: Location){}
  navTo(slide:any)
  {
    this.router.navigate([slide.navigate])
  }

}
