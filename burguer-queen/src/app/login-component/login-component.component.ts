import { Component } from '@angular/core';
interface Credentials {
  "email": string,
  "password": string 

}

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

onSubmit(values: any): void{
  console.info(values)
}

}
