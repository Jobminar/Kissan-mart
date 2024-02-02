import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orderconfirm',
  templateUrl: './orderconfirm.component.html',
  styleUrl: './orderconfirm.component.css'
})
export class OrderconfirmComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/orders']); // Correct path without leading '/'
      console.log("hello");
    }, 3000); // 3000 milliseconds (3 seconds) delay
  }

}