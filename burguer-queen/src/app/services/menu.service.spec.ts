import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuService } from './menu.service';
import { of, throwError } from 'rxjs';

describe('MenuService', () => {
  let service: MenuService;
  let httpClientSpy: { post: jasmine.Spy}; //mock del metodo get con jasmine

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new MenuService(httpClientSpy as any);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
        // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [],
       
          });      
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TODO: Debe retornar objecto del 
  it('Should return obj (Login ok)', (done: DoneFn) => {
    //TODO: Mock de datos!
    const mockCredentials = {
      email: 'alguien@adb.com',
      password: '123456'
    } 

    const mockResult = {
      "accessToken": "sd46s5a4da1sd435"
    }

    httpClientSpy.post.and.returnValue(of(mockResult));  //TODO: Observable

    // const { email, password} = mockCredentials

    service.loginUsers(mockCredentials)
    .subscribe(res => { //TODO:Hacer que de por finalizado la prueba:
      expect(res).toEqual(mockResult)
      done();
    })
   })
    //TODO:Una respuesta incorrecta :400
    // it(' should return an error 400', (done: DoneFn)=> {
    //   //TODO: mock de datos
    //   const invalidCredential = {
    //     email: 'adaj@ahd.com',
    //     password: '123478'
    //   }
    //   const resultMock = new HttpErrorResponse({
    //     error: "err",
    //     status: 400,
    //     statusText: 'Not Found'
    //   }) 

    //   httpClientSpy.post.and.returnValue(throwError(resultMock))
    //   //TODO:
    //  // const { email, password } = invalidCredential
    //   service.loginUsers(mockCRE)
    //   .subscribe({
    //     next: res => {

    //     },
    //     error: error => {
    //       expect(error.status).toEqual(400);
    //       done()
    //     }
    //   })
    //})

//});
