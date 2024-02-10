import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent implements OnInit {

  ngOnInit(): void {
    this.navigator.setupBackButtonListener()
  }
  goToPreviousPage(): void {
    this.location.back();
  }

  formData={
    phoneNumber:'',
    email:''
  }
  constructor (private location: Location,
                private navigator:NavigationService)
  {

  }
  submit()
  {

  }

}
