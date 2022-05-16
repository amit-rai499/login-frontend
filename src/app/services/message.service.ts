import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  baseUrl = "http://localhost:8083"
  constructor(private http:HttpClient) { }


  getMessage(){
    return this.http.get(`${this.baseUrl}`)
  }
}
