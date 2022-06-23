import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuService } from './menu.service';
import { Order } from '../app.module';

describe('MenuService', () => {
  let service: MenuService;
  let httpClientSpy: { get: jasmine.Spy}; //mock del metodo get con jasmine

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
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
});
