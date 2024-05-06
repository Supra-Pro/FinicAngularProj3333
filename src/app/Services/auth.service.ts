import { Injectable } from '@angular/core';
import { LoginRequest } from '../Interfaces/login-request';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { LoginResponse } from '../Interfaces/login-response';
import { Router } from '@angular/router';
import { RegisterRequest } from '../Interfaces/register-request';
import { RegisterResponse } from '../Interfaces/register-response'; 
import { UpdateUser } from '../Interfaces/update-request';
import { Email } from '../Interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private router: Router) { }
  
  apiUrl = environment.apiUrl;
  tokenKey: string = 'token';

  login(data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}User/Login`, data).pipe(
      map((response) => {
        if (response.isSuccessful) {
          localStorage.setItem(this.tokenKey, response.token);
        } else {
          this.router.navigate(['/register']); // Navigate to register if login is unsuccessful
        }
        return response; 
      })
    );
  }

  register(data1:RegisterRequest): Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(this.apiUrl+'User/Register', data1);
  }


  update(id: number, data: UpdateUser): Observable<UpdateUser> {
    return this.http.put<UpdateUser>(this.apiUrl + `UpdateUser?id=${id}`, data)
  }


  getById(id: number): Observable<UpdateUser> {
    return this.http.get<UpdateUser>(this.apiUrl + `UserGetById?id=${id}`)
  }

  sendEmail(email: string): Observable<any> {
    const apiUrl = 'https://localhost:7162/api'; 
    const emailParam = encodeURIComponent(email); 
    const url = `${apiUrl}/User/Email?email=${emailParam}`; 
    return this.http.post<any>(url, null); 
  }
  


  logout(){
    localStorage.setItem(this.tokenKey, '');
  }


  checkRouting(data: string[]): boolean {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];
      if(element == 'Admin'){
        this.router.navigate(['/admin-profile']);
        return true;
      } else if(element == 'User'){
        this.router.navigate(['/user-profile']);
        return true;
      }
    }
    this.router.navigate(['/login'])
    return false;
  }
}