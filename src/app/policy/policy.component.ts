import { Component ,OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-policy',
  
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.css'
})
export class PolicyComponent implements OnInit {

  ngOnInit(): void {
      this.navigator.setupBackButtonListener();
  }
  constructor(private location:Location,
              private navigator:NavigationService){}
  goToPreviousPage(): void {
    this.location.back();
  }
}
