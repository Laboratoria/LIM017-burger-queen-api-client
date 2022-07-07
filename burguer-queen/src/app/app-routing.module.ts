import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { OrderComponent } from '../waiter/order/order.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { ChefComponent } from './chef/chef.component';
import { ProductsComponent } from 'src/waiter/products/products.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponentComponent},
  { path: 'admin', component: AdminComponent,
  children: [ 
    {path:"employees",component: EmployeesComponent} 
  ]
},
  { path: 'waiter', component: ProductsComponent,
  children: [ 
    {path:"products", component: OrderComponent} 
  ] },
  { path: 'chef', component: ChefComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
