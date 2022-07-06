import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsEdited, Order } from '../app.module';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menu: Order[] = [];
  form!: FormGroup;
  productsView= true;

  @Output() productDeleteEvent = new EventEmitter<string>();
  @Input() selection!: Order;
  @Output() updateEvent = new EventEmitter<Order>();
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() className = 'btn-primary';

  constructor(private menuService: MenuService, 
    public formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  this.menuService.getProduct().subscribe((menu) => (this.menu = menu, console.log(menu))),
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required]
    })
    
  }

  onProductDelete( id: string){
    if(confirm('¿Estás seguro?')){
      this.menuService.deleteProduct(id)
      .subscribe(
        res => { console.log('borrando producto', res)
          const productArray = this.menu.filter( product => product.id !== id );
          this.menu = [...productArray];
        }
      )
    }
  }

  UpdateInfo(menu: any, body: ItemsEdited):void{
    this.menuService.update(menu, body)
    .subscribe({
    next:res => {
      const productArray = this.menu.filter( product => product.id !== menu.id );
      this.menu= [...productArray, menu],
      console.log(res)
    },
    error: error => {
      console.log(error)
    }  
    })
  }

  onUpdateInfo ( item: Order, change:string): void{
  console.log('linea 62', item);
  console.log( change);
  
     this.updateEvent.emit(item);
  }
  addProduct( ):void{
    console.log(this.form.value)
    this.menuService.addProducts('http://localhost:8080/products',
    {  
    name: this.form.value.name,
    price: this.form.value.price,
    type: this.form.value.type,
  
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
  hideData(){
    return (this.productsView = true)
  }
}
