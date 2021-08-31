import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private login:LoginService) { }

  validatingDTO={ 
    validStatus:Boolean,
    userName:String
  };

  ngOnInit(): void {
    const obs$=interval(60000);
    obs$.subscribe(
      (data1)=>{
        console.log(data1);
        this.login.validatetoken().subscribe(
          (data:any)=>{
            console.log(data);
            this.validatingDTO=data;
            if(this.validatingDTO.validStatus){ 
            }
            else{
              Swal.fire('Session Expired','Please Log In Again','error');
              this.login.logout();
            }
          },(error)=>{
            console.log(error)
            Swal.fire('Session Expired','Please Log In Again','error');
              this.login.logout();
          });
      })
  }
}
