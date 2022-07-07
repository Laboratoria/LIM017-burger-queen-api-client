import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/app.module';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  menu: Order[] = [];

  constructor( public menuService: MenuService) { }

  ngOnInit(): void {
  this.menuService.getProduct().subscribe((menu) => (this.menu = menu, console.log(menu)))

  }
  numero: number = 1;
  sumar(){
    this.numero +=1
  }
  restar(){
    this.numero -=1
  }
}
