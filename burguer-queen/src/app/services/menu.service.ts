import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Order, LoginResponse, User, Credentials } from '../app.module';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:8080/orders/';
  private urlProducts = ' http://localhost:8080/products/';
  private urlUser = ' http://localhost:8080/';
  public user = {
    email: '',
    roles: {
      admin: true,
    },
    id: 0
  }

  constructor(private http: HttpClient, private router: Router) { }
  accessToken = localStorage.getItem("accessToken")

  httpOptions = () => (
    {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.accessToken}`,
        })
    })
  
  // guardar token
  saveToken(loginResponse: any) {
    localStorage.setItem("accessToken", loginResponse.accessToken);
    this.accessToken = loginResponse.accessToken;
    console.log('imprimiendo savetoken', loginResponse)

    this.getUser(loginResponse)
      .subscribe(res => {
        localStorage.setItem('id', res.id);
        localStorage.setItem('email', res.email);
        if (res.roles === 'admin') {
          this.router.navigate(['/admin']);

        } else if (res.roles === 'waiter') {
          this.router.navigate(['/waiter'])
        } else if(res.roles === 'chef'){
          this.router.navigate(['/chef'])
        } else {
          this.router.navigate(['/login'])
        }

      })

  }

  isLoggedIn() {
    return localStorage.getItem('accessToken') != null;
  }

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl, this.httpOptions());
  }
  // logueo de usuarios
  loginUsers(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.urlUser}login`, credentials)
  }
  
//obtener usuarios 
  getAllUsers(): Observable<User> {
    return this.http.get<User>(`${this.urlUser}users`, this.httpOptions())
  }
  //obtener usuarios por id
  getUser(loginResponse: any): Observable<User> {

    return this.http.get<User>(`${this.urlUser}users/${loginResponse.user.id}`, this.httpOptions())
  }
  

  //obtener productos
  getProduct(): Observable<Order[]> {
    return this.http.get<Order[]>(this.urlProducts, this.httpOptions());
  }
  
  // añadir productos
  addProducts( url: string, body: any){
    return this.http.post(url, body, this.httpOptions())
  }
  logOut() {
    localStorage.clear();
  }


  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.urlProducts}/${id}`, this.httpOptions())
  }
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.urlUser}users/${id}`, this.httpOptions())
  }

  updateProduct( data: any, id:number): Observable<void> {  
    console.log('id', id)
    console.log('data', data)
      return this.http.patch<void>(`${this.urlProducts}${id}`, data,  this.httpOptions() )
  }
  updateOrder(body: any, id:any): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}${id}`, body, this.httpOptions())
  }
//   sumar(id: string)Observable<void> {
//   return this.http.post<void>(`${this.urlProducts}/${id}`, this.httpOptions())
// }
}
