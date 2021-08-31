import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor(public login:LoginService,   private router:Router, private customer:CustomerService) { }
  customerName:String;
  
  customerDetails:any;

  ngOnInit(): void {
    this.getDetails();
  }

  userLogout(){
    this.login.logout();
    console.log("user logged out");
    this.login.loginStatusSubject.next(false)
    window.location.reload();
    this.router.navigate(['login']);
  }

  private getDetails(){
    this.customer.getCustomerDetails().subscribe(
      (data)=>{
        this.customerDetails=data;
        this.customerName=this.customerDetails.customerName;
        console.log(data);
      },(error)=>{
        console.log(error);
      }
    )
  }
}
