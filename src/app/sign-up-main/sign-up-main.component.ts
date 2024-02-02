import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up-main',

  templateUrl: './sign-up-main.component.html',
  styleUrl: './sign-up-main.component.css'
})
export class SignUpMainComponent {


  userName:any="";
  phoneno: any = "";
  password: any = "";
  loginForm: FormGroup;
  status: boolean = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private routers:Router,
    private dataSharedservice:DataTransferService
  ) {
    
    this.loginForm = this.fb.group({
      userName :['',[Validators.required]],
      phoneno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          // Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
        ]
      ]

    });
    console.log(this.userName)
  }
  formValidating()
  {
    
  }
  get userNameControl()
  {
    return this.loginForm.get('userName')
  }
  get phoneNoControl() {
    console.log('phone',this.loginForm.get('phoneno'))
    return this.loginForm.get('phoneno');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }
  
  // makeApiRequest() {
  //   const apiUrl = 'https://kisanmart.onrender.com/signup';

  //   // Define the request body
  //   const requestBody = {
  //     userName:this.loginForm.value.userName,
  //     phoneNumber: this.loginForm.value.phoneno,
  //     password: this.loginForm.value.password
  //   };

  //   // Define the headers
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //     // You can add more headers if needed
  //   });

  //   // Make the POST request
  //   this.http.post(apiUrl, requestBody, { headers }).subscribe(
  //     (response) => {
  //       // Handle the API response here
  //       console.log('API Response:', response);
  //       console.log(this.loginForm.value.userName)
  //       console.log(this.loginForm.value.phoneno);
  //       console.log(this.loginForm.value.password);
  //     },
  //     (error) => {
  //       // Handle errors
  //       console.error('API Error:', error);
  //     }
  //   );
  // }
  check()
  {
    console.log("done")
  }
  details() {
    console.log(this.userName)
    this.status = false;
    this.loginForm.controls['userName'].updateValueAndValidity();
    this.loginForm.controls['phoneno'].updateValueAndValidity();
    this.loginForm.controls['password'].updateValueAndValidity();
    
    // Check for phone number and password validity
    if (this.loginForm.valid) {
      // this.makeApiRequest();
      this.status = false;
      this.dataSharedservice.setSignUpDetails(this.loginForm.value.phoneno,
        this.loginForm.value.password,this.loginForm.value.userName)
      this.routers.navigate(['src/app/sign-up'])
    }
    else {
      this.status = true;
    }
 
  }
}


