import { Component, Inject, OnInit } from '@angular/core';
import { ItemsEdited, Order } from 'src/app/app.module';
import { MenuService } from 'src/app/services/menu.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  menu: Order[] = [];
  selection!: string;
  inputs!: ItemsEdited;
  arrayMenu: any = [];
  arrayBreakfast: any = [];
  public productList = new BehaviorSubject<any>([]);
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

 
  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'

    });
  }
  addToModalComponent(menu: any){
  
    console.log(this.arrayMenu)
  }
  //agrega el array de menu desde un servicio
  // addToModalComponent(menu: any){
  //   this.arrayMenu.push(menu);
  //   this.productList.next(this.arrayMenu)
  //    console.log(this.arrayMenu)
  //  }
}


