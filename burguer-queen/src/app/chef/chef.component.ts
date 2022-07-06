import { Component, OnInit } from '@angular/core';
import { Order } from '../app.module';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.component.html',
  styleUrls: ['./chef.component.css']
})
export class ChefComponent implements OnInit { 
 menu:  Order[] = [];
  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getOrder().subscribe(
      (menu) => (this.menu = menu, console.log(menu)));
  }
  
  // updateStatus(){
  //   this.menuService.updateOrder()
  // }

}
