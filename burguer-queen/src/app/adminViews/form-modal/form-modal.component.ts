import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuService } from 'src/app/services/menu.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  disableSelect = new FormControl(false);
  form!: FormGroup;
  actionBtn: string = 'Guardar';
  constructor(
    private dialogRef: MatDialogRef<FormModalComponent>,
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    //private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      image: ["", Validators.required],
      type: ["", Validators.required]
    });
    console.log(this.editData)
    if (this.editData) {
      this.actionBtn = 'Editar';
      this.form.controls['name'].setValue(this.editData.name);
      this.form.controls['price'].setValue(this.editData.price);
      this.form.controls['image'].setValue(this.editData.image);
      this.form.controls['type'].setValue(this.editData.type);
    }
  }



  addProduct() {
    if (!this.editData) {
      console.log(this.form.value)
      if (this.form.valid) {
        this.menuService.addProducts('http://localhost:8080/products', this.form.value)
          .subscribe({
            next: (res) => {
              alert("Producto agregado exitosamente")
              this.form.reset();
              this.dialogRef.close('save');
            },
            error: (error) => {
              alert("Error mientras se agregaba el producto")
            }
          })
      }
    } else {
      this.updateProduct()
    }
  } 

  updateProduct(){
    this.menuService.updateProduct(this.form.value, this.editData.id)
    .subscribe(
      {
        next: (res) => {
          console.log(res)
          alert('Producto actualizado exitosamente');
          this.form.reset();
          this.dialogRef.close('Editar');
        },
        error: (error) => {
          alert(`${error}' Error en la actualización de datos`);
        }
      }
    )
  }

}
