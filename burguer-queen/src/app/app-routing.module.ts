import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  // { path: 'menu', component: AppComponent},
  { path: 'login', component: LoginComponentComponent},
  { path: 'waiter', component: OrderComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: AppComponent},
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
