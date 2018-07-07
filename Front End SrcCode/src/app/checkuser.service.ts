import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class CheckuserService {
  constructor(private http: HttpClient) { }
  
  /*
    check the user entered details to the save registered details the user(login)
  */
  checkuser(user: User): Observable<any> {
    return this.http.post<User>('/login', user, httpOptions)
  }
}
