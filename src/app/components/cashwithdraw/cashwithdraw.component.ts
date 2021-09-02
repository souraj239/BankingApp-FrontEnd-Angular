import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cashwithdraw',
  templateUrl: './cashwithdraw.component.html',
  styleUrls: ['./cashwithdraw.component.css']
})
export class CashwithdrawComponent implements OnInit {

  

  amountDTO={
    amount: Number,
  }
  accountBalance:any;

  constructor(private login:LoginService, private router:Router,private transactionService:TransactionService,private customer:CustomerService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  confirm(){
    Swal.fire({
      title: 'Confirm Cash Withdrawal of Rs. '+this.amountDTO.amount,
      showDenyButton: true,
      confirmButtonText: `Confirm`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.withdraw();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  withdraw(){
    this.transactionService.withdrawMoney(this.amountDTO).subscribe(
      (data:any) =>{
        if(data.accountBalance<this.accountBalance){
          console.log(data)
          console.log("success")
          Swal.fire('Cash Withdrawal Successfull','Your Account Balance is: ' + data.accountBalance,'success');
          this.router.navigate(['/dashboard/']);
        }else{
          console.log(data)
          console.log("failed")
          Swal.fire('Transaction Failed',"Enter Correct Amount",'error');
          this.router.navigate(['dashboard/content/withdraw']);
        }
      },(error)=>{
        console.error(error);
        alert("Transaction Failed! Repeated Transaction failure may close the session")
        Swal.fire('Transaction Failed',"Please enter a amount less than your account balance",'error');
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
