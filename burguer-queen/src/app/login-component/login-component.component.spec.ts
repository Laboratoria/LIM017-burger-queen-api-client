import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './login-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { By } from '@angular/platform-browser';


describe('LoginComponentComponent', () => {
  let component: LoginComponentComponent;
  let fixture: ComponentFixture<LoginComponentComponent>;

  beforeEach(async () => {
    //Crear un modulo de test con TestBed
    await TestBed.configureTestingModule({
      //pongo los modulos q need:
      imports: [
        FormsModule,
        ReactiveFormsModule, 
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponentComponent); //nos asigna la creación del componente
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(LoginComponentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  // it(' should update info users', ()=> {
  //   let  email = component.form.controls['email']
  //   let password = component.form.controls['password']

  //   email.setValue('alguien@adb.com')
  //   password.setValue('123456')

  //   const btn = fixture.debugElement.query(By.css('.btn'))
  //   btn.nativeElement.click()
  //   const response =  { token: "sd46s5a4da1sd435" }
  //   expect(component.onSubmit).toEqual(response)
  // })
});

