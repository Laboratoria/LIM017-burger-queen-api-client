import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginResponse, Credentials, Order } from '../app.module';
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
  login!: Credentials;
  form!: FormGroup;
  messageError: undefined;
  constructor(public formBuilder: FormBuilder,
    public menuService: MenuService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  // requerimentsForms = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email ]),
  //   password: new FormControl (['', Validators.required])
  // })

  // onSubmit(res: Credentials) {
  //   this.menuService.addUsers('http://localhost:8080/login ',
  //     {
  //       email: this.form.value.email,
  //       password: this.form.value.password
  //     })
  //     .subscribe( { 
  //       next: res => {
  //         // const str = 'accessToken' as string;
  //         // const token = res[str as keyof typeof res] 

  //         //  console.info(token)
  //         console.log(res)

  //         , this.router.navigate(['/waiter'])
  //       },
  //        error: error => {
  //         // mostrar error igukando propiedad:
  //         this.messageError = error.status; 
  //        },
  //     });
  // }
  onSubmit(res: Credentials) {
    this.login =
    {
      email: res.email,
      password: res.password
    }
    this.menuService.loginUsers(this.login)
      .subscribe({
        next: res => {
          // const str = 'accessToken' as string;
          // const token = res[str as keyof typeof res] 

          //  console.info(token)
          console.log('recibiendo respuesta', res)
          this.menuService.saveToken(res)

          // , this.router.navigate(['/waiter'])
        },
        error: error => {
          // mostrar error igukando propiedad:
          this.messageError = error.status;
        },
      });
  }

  // loginUser( res: Credentials){
  //   this.login = {
  //     email: res.email,
  //     password: res.password
  //   }
  //   this.menuService.loginApp(this.login).subscribe({
  //     next: res => {
  //       this.menuService.saveToken(res);
  //     },
  //     error: error =>{
  //       this.messageError = error.status;
  //     },
  //   })

  // }

}
