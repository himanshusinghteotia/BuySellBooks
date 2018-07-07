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
export class AdduserService {
  constructor(private http: HttpClient) { }

  /*
    function to register user by add their entered details in the backend
  */
  adduser(user: User): Observable<any> {
    return this.http.post<User>('/register', user, httpOptions)
  }
}
