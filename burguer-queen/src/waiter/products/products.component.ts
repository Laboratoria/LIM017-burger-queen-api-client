import { Component, Inject, OnInit } from '@angular/core';
import { ItemsEdited, Order } from 'src/app/app.module';
import { MenuService } from 'src/app/services/menu.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  menu: Order[] = [];
  selection!: string;
  inputs!: ItemsEdited;
  arrayBreakfast: any = [];


  constructor(public menuService: MenuService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.menuService.getProduct()
      .subscribe({
        next: (menu) => {
          this.menu = menu, console.log(menu)
          this.arrayBreakfast = this.menu.filter(e => e.type === "desayuno");
          this.arrayBreakfast.forEach((product: any) => {
            Object.assign(product, { quantity: 1, total: product.price })
          })
          console.log('filtro de desayunos', this.arrayBreakfast)
        },
        error: error => console.warn(error)
      })
  }
  // filterCategories(e: any) {
  //   const type = e.target.dataset.value;
  //   if(type != ''){
  //     this.arrayBreakfast = this.menu.filter((element: any)=> element.type === type)
  //   } else {
  //     this.arrayBreakfast = this.menu
  //   }
  //   console.log(this.arrayBreakfast)
  //   return this.arrayBreakfast
  // }
  addOrder(res: any) {
    this.inputs = {
      name: res.name,
      type: res.type,
      price: res.price,
      qty: res.qty,
      userId: res.userId,
      client: res.client
    }
    this.menuService.addProducts('http://localhost:8080/orders', this.inputs)
      .subscribe({
        next: res => console.log('respuesta con id', res),
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
  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'

    });
  }

}


