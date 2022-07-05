import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from '../app.module';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menu: Order[] = [];
  form!: FormGroup;
  @Output() productDeleteEvent = new EventEmitter<string>();
  @Input() selection!: Order;
  @Output() updateEvent = new EventEmitter<Order>();

  constructor(private menuService: MenuService, 
    public formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  this.menuService.getOrder().subscribe((menu) => (this.menu = menu, console.log(menu))),
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      cost: ['', Validators.required],
      precio: ['', Validators.required]
    })
  }
 
  // onProductDelete(id: string |number| any):void{
  //   return  this.productDeleteEvent.emit(id), console.log(id);
  // }
  onProductDelete( id: string){
    if(confirm('¿Estás seguro?')){
      this.menuService.deleteProduct(id)
      .subscribe(
        res => {
          const productArray = this.menu.filter( product => product.id !== id );
          this.menu = [...productArray];
        }
      )
    }
  }

  UpdateInfo(menu: Order):void{
    this.menuService.update(menu)
    .subscribe(
      res => {
        const productArray = this.menu.filter( product => product.id !== menu.id );
        this.menu= [...productArray, menu]
      }
    )
  }

  onUpdateInfo ( item: Order, change:string): void{
  console.log(item, change)
    // this.updateEvent.emit(item);
  }
  addProduct( ):void{
    console.log(this.form.value)
    this.menuService.addUsers('https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/products',
    {  
    name: this.form.value.name,
      precio: this.form.value.precio,
      category: this.form.value.category,
      cost: this.form.value.cost
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
