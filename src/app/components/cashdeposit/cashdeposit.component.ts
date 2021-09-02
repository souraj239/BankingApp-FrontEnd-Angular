import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
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
  accountBalance:any;

  
  constructor(private login:LoginService, private router:Router,private transactionService:TransactionService, private customer:CustomerService,private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.getDetails();
  }

  confirm(){
    if(this.amountDTO.amount==null){
      this.snack.open("Username is required.", '',{
        duration:3000,
      });
      return;
  }
    Swal.fire({
      title: 'Confirm Cash Withdrawal of Rs. '+this.amountDTO.amount,
      showDenyButton: true,
      confirmButtonText: `Confirm`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.depositMoney();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  depositMoney(){
    this.transactionService.depositMoney(this.amountDTO).subscribe(
      (data:any) =>{
        if(data.accountBalance>this.accountBalance){
          console.log(data)
        console.log("success")
        Swal.fire('Cash Deposit Successfull','Your Account Balance is: ' + data.accountBalance,'success');
        this.router.navigate(['dashboard/welcome']);
        }else{
          console.log(data)
          console.log("failed")
          Swal.fire('Transaction Failed',"Enter Correct Amount",'error');
          this.router.navigate(['dashboard/content/withdraw']);
        }
      },(error)=>{
        console.error(error);
        alert("Session Expired")
        Swal.fire('Session Expired','Please Log In Again','error')
      }
    )

  }
  private getDetails(){
    this.customer.getCustomerDetails().subscribe(
      (data:any)=>{
        this.accountBalance= data.accountBalance;
        console.log(data);
      },(error)=>{
        console.log(error);
      }
    )
  }

}
