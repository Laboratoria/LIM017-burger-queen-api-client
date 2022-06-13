import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*  --- enumerables para asignar valores  ----*/

enum Profiles {
  waiter = 'waiter',
  admin = 'admin',
  chefcito = 'chef',
}
console.log(Profiles.admin);

/* ---objetos para asignar valores ---*/
const profiles = {
  Waiter: 'waiter',
  Admin: 'admin',
  Chefcito: 'chef',
}
console.info(profiles.Chefcito);
/*  --- para convertir a un tipo un valor que ingresa   ---*/
//Type assertion
let passwordTest: any = '124adad';
// dos formas sintacticas:
// let passwordTestStr = <string> passwordTest; the other way:
let passwordTestSTr = passwordTest as string;
//así el valor recibido por un input se convierte a string

/*   --- extender una clase ---    */
class Person {
   // private create: string;
   // protected delete: string; esta tiene un scope local, solo aquí
  constructor (){  }
  saludo(): void{
    console.log('Hola, ')
  }
 }

 //1

/*  --- usando clases --- */
//se usa la palabra reservada class
class Employee extends Person {
  //atributos
  // cualquier propiedad como las que se usan en los objetos:
        // id?: number;
        // name: string;
        // profile: string;
  //métodos - acciones
  constructor(public id: number, private name: string, private profile: string) { // autoasignación
        // this.id = id;
        // this.name = name;
        // this.profile = profile;

        super();    //clases extendidas deben tener 100pre esto antes de llamar
    this.showInfo();
   }
  showInfo(): void {
    console.log(` ${this.name}, estás visualizando el tablero del ${this.profile}`)
  }

}
 const emp = new Employee(1, 'tata', 'chef');
 emp.saludo();
 