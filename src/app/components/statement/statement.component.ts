import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transactions } from 'src/app/models/transactions';
import { LoginService } from 'src/app/services/login.service';
import { TransactionService } from 'src/app/services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  transactionList:Transactions[]=[];
  transactionType:Boolean;

  constructor(private transactionService:TransactionService,private login:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.getTransactions()
  }

  getTransactions(){
    this.transactionService.getStatement().subscribe(
      (data:any)=>{
        this.transactionList = data.reverse();
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
