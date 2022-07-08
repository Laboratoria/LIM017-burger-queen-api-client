import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  disableSelect = new FormControl(false);
  card: any = [];
  selection!: string;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(res: any): void {
  
    console.log('id', res);
    this.selection = res;
  }
}
