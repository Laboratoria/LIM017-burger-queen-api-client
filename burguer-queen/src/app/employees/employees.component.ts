import { Component, OnInit } from '@angular/core';
import { User } from '../app.module';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 users: any;
  constructor(private menuservice: MenuService) { }

  ngOnInit(): void {
    this.menuservice.getUser(this.users).
    subscribe((users) => (this.users = users, console.info(users)))
  }

}
