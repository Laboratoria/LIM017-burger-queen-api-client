import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/orders';
 

  constructor(private http: HttpClient) { }

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }
  //  añadir nuevos usuarios

  addUsers( url: string, body:any){
    return this.http.post(url, body)
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  update( menu: Order): Observable<void> {
    const body = {
      name: menu.name,
      category : menu.category,
      cost: menu.cost,
      precio: menu.precio,
      image: menu.image
    }
    return this.http.put<void>(`${this.apiUrl}/${menu.id}`, body)
  }
}
