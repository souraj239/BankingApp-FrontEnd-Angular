import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})
export class MoneyTransferComponent implements OnInit {

  transactionDTO={
    userName:String,
    amount:Number
  }
  constructor(private transactionService:TransactionService, private router:Router, private login:LoginService) { }

  ngOnInit(): void {
  }

  transferMoney(){
    this.transactionService.transferMoney(this.transactionDTO).subscribe(
      (data:any)=>{
        console.log(data)
        console.log("success")
        Swal.fire('Transfer Successfull','Your Account Balance is: ' + data.accountBalance,'success');
        this.router.navigate(['dashboard/login']);
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
