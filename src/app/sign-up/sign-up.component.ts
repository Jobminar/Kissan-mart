import { Component,OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  ngOnInit(): void {
    console.log("resturn",this.pass.passwordShared,this.pass.phoneNo,this.pass.userName)
    this.navigator.setupBackButtonListener();
  }
  passwordInput:any;
  FinalPassword:any;
  confirmPasword:any;
  constructor(private pass:DataTransferService,
              private location:Location,
              private http: HttpClient,
              private router:Router,
              private navigator:NavigationService)
  {
   
    this.passwordInput=this.pass.passwordShared;

  }

  makeApiRequest() {
    const apiUrl = 'https://kisanmart.onrender.com/signup';

    // Define the request body
    const requestBody = {
      userName:this.pass.userName,
      phoneNumber: this.pass.phoneNo,
      password: this.pass.passwordShared
      
    };
    console.log(requestBody)
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // You can add more headers if needed
    });

    // Make the POST request
    this.http.post(apiUrl, requestBody, { headers }).subscribe(
      (response) => {
        // Handle the API response here
        console.log('API Response:', response);
        // console.log(this.loginForm.value.userName)
        // console.log(this.loginForm.value.phoneno);
        // console.log(this.loginForm.value.password);
      },
      (error) => {
        // Handle errors
        console.error('API Error:', error);
      }
    );
  }
  statuss:any;
  verify()
  {
    console.log("pre",this.passwordInput)
   if(this.passwordInput==this.confirmPasword)
   {
    this.FinalPassword=this.confirmPasword
    this.statuss=false
    console.log("final",this.FinalPassword)
    this.makeApiRequest();
    this.router.navigate(['src/app/log-in'])
   }
   else{
    this.statuss=true
   }
  }


  
}
