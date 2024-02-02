// import { NgModule } from '@angular/core';
import { BrowserModule ,HammerModule} from '@angular/platform-browser';
import { FormsModule,FormGroup } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FreshVegetablesComponent } from './fresh-vegetables/fresh-vegetables.component';
import { FreshFruitsComponent } from './fresh-fruits/fresh-fruits.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpMainComponent } from './sign-up-main/sign-up-main.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { OfficeLocationComponent } from './office-location/office-location.component';
import { FotterComponent } from './fotter/fotter.component';
import { AddressComponent } from './address/address.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';
import { RefundsComponent } from './refunds/refunds.component';
import { ProfileComponent } from './profile/profile.component';
import { PastOrderComponent } from './past-order/past-order.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { OrdersComponent } from './orders/orders.component';
import { NotificationComponent } from './notification/notification.component';
import { NewAddressComponent } from './new-address/new-address.component';
import { LeafyVegetablesComponent } from './leafy-vegetables/leafy-vegetables.component'
import { NgModule } from '@angular/core';
import { OrderconfirmComponent } from './orderconfirm/orderconfirm.component';
import { EditComponent } from './edit/edit.component';
import { VoiceComponent } from './voice/voice.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';,

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FreshVegetablesComponent,
    FreshFruitsComponent,
    LogInComponent,
    SignUpMainComponent,
    SignUpComponent,
    MyCartComponent,
    OfficeLocationComponent,
    FotterComponent,
    AddressComponent,
  
    PaymentComponent,
    RefundsComponent,
    ProfileComponent,
    PastOrderComponent,
    OrdersComponent,
    
    NotificationComponent,
    NewAddressComponent,
    LeafyVegetablesComponent,
    OrderconfirmComponent,
    EditComponent,
    VoiceComponent
    // Ng2SearchPipeModule
  
  
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    FormsModule,
    GoogleMapsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
