import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesayunosComponent } from './menu-desayunos.component';

describe('MenuDesayunosComponent', () => {
  let component: MenuDesayunosComponent;
  let fixture: ComponentFixture<MenuDesayunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDesayunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDesayunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
