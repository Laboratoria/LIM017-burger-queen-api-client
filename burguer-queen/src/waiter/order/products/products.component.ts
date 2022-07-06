import { Component, OnInit } from '@angular/core';
import { ItemsEdited, Order } from 'src/app/app.module';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  menu: Order[] = [];
  selection!: string;
  inputs!: ItemsEdited;
  constructor( public menuService: MenuService) { }

  ngOnInit(): void {
  this.menuService.getProduct().subscribe((menu) => (this.menu = menu, console.log(menu)))

  }
  addOrder(res: any){
    this.inputs = {
      name: res.name,
      type: res.type,
      price: res.price,
      qty: res.qty,
      userId: res.userId,
      client: res.client
    }
    this.menuService.addProducts('http://localhost:8080/orders',this.inputs)
    .subscribe({
      next: res => console.log('respuesta con id',res),
      error: error => console.log(error)
    })
  }
  
  onClick(res: any): void {
    this.inputs = {
      name: res.name,
      type: res.type,
      price: res.price,
      qty: res.qty,
      userId: res.userId,
      client: res.client
    }
    console.log('id', res);
    this.selection = res;
  }

}
