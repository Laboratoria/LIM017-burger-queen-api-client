import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ItemsEdited, Order } from '../../app.module';
import { MenuService } from '../../services/menu.service';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menu: Order[] = [];
  form!: FormGroup;
  productsView = true;
  displayedColumns: string[] = ['id', 'name', 'price', 'type', 'image', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() productDeleteEvent = new EventEmitter<string>();
  @Input() selection!: Order;
  @Output() updateEvent = new EventEmitter<Order>();
  @Output() newItemEvent = new EventEmitter<string>();
  @Input() className = 'btn-primary';

  constructor(private menuService: MenuService,
    public formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProduct(),
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        price: ['', Validators.required],
        image: ["", Validators.required]

      })

  }

  

  getAllProduct() {
    this.menuService.getProduct()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onProductDelete(id: string) {
    if (confirm('¿Estás seguro?')) {
      this.menuService.deleteProduct(id)
        .subscribe(
          res => {
            console.log('borrando producto', res)
            const productArray = this.menu.filter(product => product.id !== id);
            this.menu = [...productArray];
          }
        )
    }
  }

  editProduct(row: any){
    this.dialog.open(FormModalComponent, {
      width: '50%',
      data: row

    });

  }
  openDialog() {
    this.dialog.open(FormModalComponent, {
      width: '50%'

    });
  }
}
