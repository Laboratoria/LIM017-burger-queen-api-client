import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { OrderComponent } from './order.component';


describe('OrderComponent', () => {


  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ OrderComponent ],
      schemas: [ NO_ERRORS_SCHEMA   ]
      
    })
    .compileComponents();


    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




//mock menuservice
//mock metodo y la respuesta sera: [{item: cafe}, {item: pan}]



// describe('order component', () => {

//   beforeEach(() => TestBed.configureTestingModule({
//     imports: [HttpClientTestingModule], 
//     providers: []
//   }));

//    it('should be created', () => {
//     const service: any = TestBed.get('');
//     expect(service).toBeTruthy();
//    });

//    it('should have getData function', () => {
//     const service: any = TestBed.get('');
//     expect(service.getData).toBeTruthy();
//    });

// });
