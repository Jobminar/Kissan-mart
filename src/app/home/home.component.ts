import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
term:any;

constructor(private router: Router) { }

navigateToDestination() {
  this.router.navigate(['src/app/fresh-fruits.html']);
}
navgateToFreshVegetables()
{
  this.router.navigate(['src/app/fresh-vegetables.html'])
}


}
