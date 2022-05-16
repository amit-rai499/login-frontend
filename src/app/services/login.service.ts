import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url= "http://localhost:8083";
  constructor(private http:HttpClient, private router:Router) { }

  generateToken(credentials: any){
    // token generate
    return this.http.post(`${this.url}/authenticate`,credentials);
  }

  // To login user
  loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }
  // To check whether a user is logged in or not
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token === undefined || token ==='' || token === null){
      return false;
    }
    else{
      return true;
    }
  }
  //To logout user
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }

}
