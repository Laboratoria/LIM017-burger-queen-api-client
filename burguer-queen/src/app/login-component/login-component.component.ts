import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from '../app.module';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

// interface Credentials {
//   "email": string,
//   "password": string 

// }

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  menu: Order[] = [];
  form!: FormGroup;
  messageError: undefined;
  constructor(public formBuilder: FormBuilder, public menuService: MenuService, private router:Router) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    }) 
  }


  onSubmit() {
    this.menuService.addUsers('http://localhost:3001/auth',
      {
        email: this.form.value.email,
        password: this.form.value.password
      })
      .subscribe(
        res => {
        console.info(res), this.router.navigate(['/waiter'])
      },
       error => {
        // mostrar error igukando propiedad:
        this.messageError = error.status
       }
       )
  }
  // onSubmit(values: Order): void{
  //   console.info(values)
  // }

}
