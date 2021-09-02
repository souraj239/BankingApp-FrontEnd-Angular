import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RoutehomeComponent } from './pages/routehome/routehome.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashGaurdGuard } from './services/dash-gaurd.guard';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ContentComponent } from './components/content/content.component';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { StatementComponent } from './components/statement/statement.component';
import { CashwithdrawComponent } from './components/cashwithdraw/cashwithdraw.component';
import { CashdepositComponent } from './components/cashdeposit/cashdeposit.component';


const routes: Routes = [
  {
    path:'',
    component:RoutehomeComponent,
    pathMatch:'full',
  },
  {
    path: 'login',
    component: LoginComponent ,
    pathMatch:'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashGaurdGuard],
    children: [
      {
        path:'',
        component:WelcomeComponent,
        pathMatch:'full',
      },
      {
        path:'content',
        component:ContentComponent,
        children:[
          {
            path:'customerdetails',
            component:CustomerDetailsComponent,
            pathMatch:'full',
          },
          {
            path:'moneytransfer',
            component:MoneyTransferComponent,
            pathMatch:'full',
          },
          {
            path:'withdraw',
            component:CashwithdrawComponent,
            pathMatch:'full'
          },
          {
            path:'deposit',
            component:CashdepositComponent,
            pathMatch:'full'
          }
        ]
      },
      {
        path:'statement',
        component:StatementComponent,
        pathMatch:'full'

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
