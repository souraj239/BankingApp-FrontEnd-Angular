import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cashdeposit',
  templateUrl: './cashdeposit.component.html',
  styleUrls: ['./cashdeposit.component.css']
})
export class CashdepositComponent implements OnInit {

  amountDTO={
    amount: Number,
  }

  constructor(private login:LoginService, private router:Router,private transactionService:TransactionService) { }

  ngOnInit(): void {
  }

  depositMoney(){
    this.transactionService.depositMoney(this.amountDTO).subscribe(
      (data:any) =>{
        console.log(data)
        console.log("success")
        Swal.fire('Cash Deposit Successfull','Your Account Balance is: ' + data.accountBalance,'success');
        this.router.navigate(['dashboard/welcome']);
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
