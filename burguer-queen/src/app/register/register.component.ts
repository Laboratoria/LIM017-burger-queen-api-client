import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuService } from '../services/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form! : FormGroup;
  messageError: undefined;
  messageInfo!: undefined;
  constructor(public formbuilder: FormBuilder, private menuService: MenuService, private router: Router) { }

  ngOnInit(): void { 
    //se inicializan los input que vamos a capturar:
    //1.- llamar al FormGroup y le asignamos un grupo del constructor
    this.form = this.formbuilder.group(
      //los hijos de control:
      {
        email: ['', Validators.required, Validators.email],
        password: ['', Validators.required],
      }
    )
  }
  // onSubmitInRegister(){
  //   this.menuService.addUsers('http://localhost:3001/auth',
  //   {
  //     email: this.form.value.email,
  //     password: this.form.value.password
  //   })
  //   .subscribe({
  //     next: res => { 
  //       setTimeout(() => {
  //        this.router.navigate(['/login'])
  //      }, 1000)
       

  //      console.info(res)
  //    },
  //    error: error => {
  //      this.messageError = error.status;
  //    }
  //   });
    //es como un evento y vamos a capturar valores y asignarlos a:
    
  // }

}
