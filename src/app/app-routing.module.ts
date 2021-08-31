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
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
