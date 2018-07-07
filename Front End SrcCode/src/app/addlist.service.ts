import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { List } from './list'

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AddlistService {
  constructor(private http: HttpClient) { }

  /*
    function to add book details to the backend through httpclient
  */
  addlist(list: List): Observable<List> {
    return this.http.post<List>('/addlist', list, httpOptions)
  }
}