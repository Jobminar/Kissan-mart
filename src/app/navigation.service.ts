// import { Injectable,OnInit } from '@angular/core';
// import { Plugins } from '@capacitor/core';
// import { Location } from '@angular/common';
// import { Router } from '@angular/router';

// const { App,backButton } = Plugins;
// @Injectable({
//   providedIn: 'root'
// })
// export class NavigationService implements OnInit{


//   ngOnInit(): void {
//     // this.setupBackButtonListener();
//   }
//   constructor(public location:Location,public router:Router) { }

//   setupBackButtonListener() {
    
//     backButton['addListener']('backButton', () => {
//       if (this.router.url === '/home') {
//         // If on home page, exit the app
//         App['exitApp']();
//       } else {
//         // Otherwise, navigate back
//         this.location.back();
//       }
//     });
//   }
// }




import { Injectable, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {App} from @capacitor/app

const { App, BackButton } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit {
  constructor(public location: Location, public router: Router) { }

  ngOnInit(): void {
    this.setupBackButtonListener();
  }

  setupBackButtonListener() {
    BackButton.addListener('backButton', async () => {
      if (this.router.url === '/home') {
        // If on home page, exit the app
        await App.exitApp();
      } else {
        // Otherwise, navigate back
        this.location.back();
      }
    });
  }
}
