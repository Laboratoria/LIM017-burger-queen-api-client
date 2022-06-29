import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Order, LoginResponse, User, Credentials } from '../app.module';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:8080/orders';
  private urlProducts = ' http://localhost:8080/products';
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
  //login
  // loginApp( res: Credentials): Observable <LoginResponse> {
  //   this.user.email= res.email
  //   return this.http.post<LoginResponse>(this.urlUser + 'login', res)
  //   .pipe( 
  //     retry(2)
  //   )
  // }



  // guardar token
  saveToken(loginResponse: any) {
    localStorage.setItem("accessToken", loginResponse.accessToken);
    this.accessToken = loginResponse.accessToken;
    console.log('imprimiendo savetoken', loginResponse)

    this.getUser(loginResponse)
      .subscribe(res => {
        localStorage.setItem('id', res.id);
        localStorage.setItem('email', res.email);
        if (res.roles.admin === true) {
          this.router.navigate(['/admin']);

        } else if (res.roles.waiter === true) {
          this.router.navigate(['/waiter'])
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
  // añadir nuevos usuarios
  addUsers(credentials: Credentials): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.urlUser}login`, credentials)
  }

  //obtener usuarios
  getUser(loginResponse: any): Observable<User> {

    return this.http.get<User>(`${this.urlUser}users/${loginResponse.user.id}`, this.httpOptions())
  }

  logOut() {
    localStorage.clear();
  }


  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  update(menu: Order): Observable<void> {
    const body = {
      name: menu.name,
      type: menu.type,
      price: menu.price,
      image: menu.image
    }
    return this.http.patch<void>(`${this.urlProducts}/${menu.id}`, body)
  }
}
