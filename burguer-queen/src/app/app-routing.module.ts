import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '',redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponentComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'waiter', component: OrderComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
