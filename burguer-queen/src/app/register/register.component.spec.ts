import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    // bf se ejecuta por c/u de las pruebas que hay antes de cada it**
    await TestBed.configureTestingModule({
      // pongo lo q necesito tener en mis configuraciones:
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule, 
        RouterTestingModule
      ],
      providers: [],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  // it('shoul return invalid form',()=> {
  //   const email = component.form.controls['email']
  //   email.setValue('alguien@adb.com')
  //   expect(component.form.invalid).toBeTrue();
  // });
});
