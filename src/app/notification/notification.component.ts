import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit{

  ngOnInit(): void {
    this.navigator.setupBackButtonListener();
  }
  constructor(private location:Location,
              private navigator:NavigationService)
  {

  }
  goToPreviousPage(): void {
    this.location.back();
  }
}
