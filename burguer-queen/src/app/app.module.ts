import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AdminComponent } from './admin/admin.component';
import { OrderComponent } from '../waiter/order/order.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { MenuService } from './services/menu.service';
import { AuthGuard } from './auth/auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { ResolveStart } from '@angular/router';
import { ChefComponent } from './chef/chef.component';
import { ProductsComponent } from '../waiter/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ModalComponent } from '../waiter/modal/modal.component'; 

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
    EmployeesComponent,
    ChefComponent,
    ProductsComponent,
    ModalComponent,
  ],
  imports: [
    MatInputModule, 
    MatFormFieldModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatGridListModule,
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
  // productList: ItemsEdited;
}
export interface LoginResponse {
  accessToken: string;
}

export interface User {
  id: string;
  email: string;
  roles: string;
 }

// export interface Roles {
//   admin:any;
//   waiter: any;
//   chef: any;

// }
export interface Credentials {
  email: string;
  password: string;
  id?: any;
}
 export interface ItemsEdited {
  name: string;
  price: string;
  type: string;
  image?: any;
  dataEntry?: any;
  qty?: number;
  userId?: number;
  client: string;
 }

