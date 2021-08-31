import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RoutehomeComponent } from './pages/routehome/routehome.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { StatementComponent } from './components/statement/statement.component';
import { ContentComponent } from './components/content/content.component';
import {MatTableModule} from '@angular/material/table';
import { CashwithdrawComponent } from './components/cashwithdraw/cashwithdraw.component';
import { CashdepositComponent } from './components/cashdeposit/cashdeposit.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RoutehomeComponent,
    WelcomeComponent,
    SidebarComponent,
    NavbarComponent,
    CustomerDetailsComponent,
    MoneyTransferComponent,
    StatementComponent,
    ContentComponent,
    CashwithdrawComponent,
    CashdepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatListModule,
    MatTabsModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
