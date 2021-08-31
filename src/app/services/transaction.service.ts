import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }

  public getStatement(){
    return this.http.get('http://localhost:8009/getStatement')
  }

  public transferMoney(toUser:any){
    return this.http.post('http://localhost:8009/transferMoney',toUser)
  }

  public withdrawMoney(amount:any){
    return this.http.post('http://localhost:8009/cashWithdraw',amount)
  }

  public depositMoney(amount:any){
    return this.http.post('http://localhost:8009/cashDeposit',amount)
  }

}
