import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SssionStorageService } from '../sssion-storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  phoneno: any = "";
  password: any = "";
  loginForm: FormGroup;
  status: boolean = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private router: Router,
    private sessionStorageService:SssionStorageService
  ) {
    this.loginForm = this.fb.group({
      phoneno: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', Validators.required]
    });
  }

  get phoneNoControl() {
    return this.loginForm.get('phoneno');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  makeApiRequest() {
    const apiUrl = 'https://kisanmart.onrender.com/login';

    // Define the request body
    const requestBody = {
      phoneNumber: this.loginForm.value.phoneno,
      password: this.loginForm.value.password
    };

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
        this.handleLoginResponse(response);
      },
      (error) => {
        // Handle errors
        console.error('API Error:', error);
      }
    );
  }

  details() {
    console.log(this.phoneno);
    this.makeApiRequest();
    
  }
  handleLoginResponse(response: any): void {
    if (response.message === 'Login successful') {
      // If login is successful, redirect to home and store user data in session storage
      this.router.navigate(['']);
      this.sessionStorageService.set('userId', response.user);
      // this.sessionStorageService.set('username', response.username);
    } else {
      // Handle unsuccessful login (optional)
    }
  }
  navTosignUpMain()
  {
 
  console.log("inside nav")
  this.router.navigate(['src/app/sign-up-main']);
  }
  // navToProfile()
  // {
  //   console.log("inside nav")
  //   // this.router.navigate(['src/app/profile']);
  // }
  navToProfile() {
    // Assuming 'profile' is the route you want to navigate to
    this.router.navigate(['src/app/sign-up-main']);
    console.log("inside nav")
  }
}
