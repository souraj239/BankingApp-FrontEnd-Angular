import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  constructor(public router: Router, private login:LoginService, private customer:CustomerService) { }

  customerDetails={
    userName:String,
    customerName:String,
    accountNumber:String,
    ifsc: String,
    homeBranch:String,
    accountBalance: Number,
    cardNum:String,
    phoneNo:String,
    accountType:String,
    address:String
  }


  ngOnInit(): void {
    this.getDetails();
  }
  
  private getDetails(){
    this.customer.getCustomerDetails().subscribe(
      (data:any)=>{
        this.customerDetails=data;
        console.log(data);
      },(error)=>{
        console.error(error);
        alert("Session Expired")
        Swal.fire('Session Expired','Please Log In Again','error');
        this.login.logout()
        window.location.reload();
        this.router.navigate(['login']);
      }
    )
  }
}
