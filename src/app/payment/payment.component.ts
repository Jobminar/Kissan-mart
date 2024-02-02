import { Component,OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { DataTransferService } from '../data-transfer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
  phonepe:boolean=false;
  grandTotal:number=0;
  
  constructor(private location: Location,
    private payments:DataTransferService,
    private sharedDataService:DataTransferService,
    private router:Router){
    console.log(this.methods.status);
    this.grandTotal=sharedDataService.getgrandTotalPrice()
  }
  goToPreviousPage(): void {
    this.location.back();
  }
  methods:any=[
    {
      src:'assets/payment/simple-icons_phonepe.jpg',
      tittle:'PhonePeUPI',
      status:false
    },
    {
      src:'assets/payment/simple-icons_phonepe (1).jpg',
      tittle:'Google ',
      status:false
    },
    {
      src:'assets/payment/Ellipse 14.jpg',
      tittle:'paytm',
      status:false
    }
    
  ]
  paymentMethodselected:any=[];
 

  isChecked:boolean=false
  onCheckboxChange(method:any): void {
    if(method.status)
    {
      method.status=false
    }
    else
    {
      method.status=true
      this.paymentMethodselected.push(method)
      console.log(this.paymentMethodselected)
      
      this.payments.setPayment(this.paymentMethodselected);
    }
  }
  
  makePayment(paymentMethod: string) {
    // Logic to handle the payment based on the selected payment method
    if (paymentMethod === 'phonepe') {
      // Implement PhonePe payment gateway integration logic here
      console.log('Processing payment with PhonePe...');
    }
  }

  //------if payment is done
  isPaymentDone:boolean=false;
  navigateToConfirm()
  {
    this.router.navigate(['src/app/orderconfirm'])
  }
  ngOnInit(): void {
      if (this.isPaymentDone) {
        this.navigateToConfirm();
      }
  }
}
