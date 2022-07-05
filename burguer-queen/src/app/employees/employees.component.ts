import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../app.module';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 users: any;
 form!: FormGroup;
 selection!: string;

  constructor(private menuService: MenuService,
    public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.menuService.getAllUsers().
    subscribe((users) => (this.users = users, console.info(users))),
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        roles: ['', Validators.required],

      })
  }

  onUserDelete( id: string){
    if(confirm('¿Estás seguro?')){
      this.menuService.deleteUser(id)
      .subscribe(
        res => { console.log('borrando producto', res)
          const productArray = this.users.filter( (product: { id: string; }) => product.id !== id );
          this.users = [...productArray];
        }
      )
    }
  }
  addUsers():void{
    console.log(this.form.value)
    this.menuService.addProducts('http://localhost:8080/users',
    {  
    email: this.form.value.email,
    password: this.form.value.password,
    roles: this.form.value.roles
  
    }) 
    .subscribe({
      next: res => {
        console.info(res)
      },
      error: error => {
        console.error(error.status)
      }
    })
  
  }
 

}
