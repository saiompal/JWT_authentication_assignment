import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public register_url ="http://localhost:3000/api/register";
  public login_url = "http://localhost:3000/api/login";

  constructor(private http:HttpClient) { }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  registerUser(user: any){
    return this.http.post<any>(this.register_url,user);
  }
  loginUser(user: any){
    return this.http.post<any>(this.login_url,user);
  }
  getToken(){
    return localStorage.getItem('token')
  }

}
