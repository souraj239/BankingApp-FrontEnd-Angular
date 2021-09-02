import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionDTO } from 'src/app/models/transaction-dto';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent implements OnInit {



  constructor(private transactionService:TransactionService, private router:Router, private login:LoginService, private customer:CustomerService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  accountBalance:any;

  transactionDTO={
    "userName":"",
    "amount":""
  };
  
  
  confirm(){
   
    Swal.fire({
      title: 'Confirm Transfer of Rs. '+this.transactionDTO.amount+' to '+this.transactionDTO.userName,
      showDenyButton: true,
      confirmButtonText: `Confirm`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.transferMoney();
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  transferMoney(){
    this.transactionService.transferMoney(this.transactionDTO).subscribe(
      (data:any)=>{
        if(data.accountBalance!=this.accountBalance){
          console.log(data)
          console.log("success")
          Swal.fire('Transfer Successfull','Your Account Balance is: ' + data.accountBalance,'success');
          this.router.navigate(['/dashboard/']);
        }
        else{
          console.log(data)
          console.log("failed")
          Swal.fire('Transaction Failed',"Check Recipient's details",'error');
          this.router.navigate(['dashboard/content/transferMoney']);
        }
      },(error)=>{
        console.error(error);
        alert("Transaction Failed! Repeated Transaction failure may close the session")
        Swal.fire('Transaction Failed',"Please Check Recipient's details and your account balance",'error');
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
