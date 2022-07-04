import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials, Order } from '../app.module';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  menu: Order[] = [];
  login!: Credentials;
  form!: FormGroup;
  messageError: undefined;
  constructor(public formBuilder: FormBuilder,
    public menuService: MenuService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit(res: Credentials) {
    this.login =
    {
      email: res.email,
      password: res.password
    }
    this.menuService.loginUsers(this.login)
      .subscribe({
        next: res => {
        //console.log('recibiendo respuesta', res)
          this.menuService.saveToken(res)
        },
        error: error => {
          // mostrar error igualando propiedad:
          this.messageError = error.status;
        },
      });
  }


}
