import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/menu';
  //private url = 'http://localhost:3001/auth'

  constructor(private http: HttpClient) { }

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
  //  añadir nuevos usuarios

  addUsers( url: string, body:any){
    return this.http.post(url, body)
  }

  // addUsers(email: string, password: string): Observable<Order[]> {
  //   const body = { email: email, password: password }
  //   return this.http.post<Order[]>(this.endPoint1, body);
  // }


  // delete$ = this.http.delete('http://localhost:3000/menu');
  // deleteOrder(menu: Order): Observable<Order> {
  //   const url = `${this.apiUrl}/${menu.id}`;
  //   return this.http.delete<Order>(url);
  // }
}
