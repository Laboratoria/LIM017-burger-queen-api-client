import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from '../app.module';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menu: Order[] = [];
@Output() productDeleteEvent = new EventEmitter<string>();

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getOrder().subscribe((menu) => (this.menu = menu, console.log(menu)));
  }
 
  onProductDelete(id: string):void{
    this.productDeleteEvent.emit(id);
  }
}
