import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { MenuService } from './services/menu.service';
import { AuthGuard } from './auth/auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { ResolveStart } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    AdminComponent,
    OrderComponent,
    RegisterComponent,
    NavbarComponent,
    PagenotfoundComponent,
    HomeComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    MenuService, AuthGuard
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* crear una interface para ver la data solicitada con http */

export interface Order {
  id: any;
  name: string;
  type: string;
  price: number;
  email: string;
  password: string;
  image: any;
  dataEntry: any;
  products: any;
  client: string;
  status: string;
}
export interface LoginResponse {
  accessToken: string;
}

export interface User {
  id: string;
  email: string;
  roles: Roles;
 
}

export interface Roles {
  admin: boolean;
  waiter: boolean;

}
export interface Credentials {
  email: string;
  password: string;
  id?: any;
}


