import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import{List} from'./list'

const httpOptions={
  headers: new HttpHeaders({'content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class GetlistService {
  constructor(private http:HttpClient) { }

  /*
    used to get all the items from the backend to display at one page
  */
  getItem():Observable<List[]>{
    return this.http.get<List[]>('/listing')
  }

  /*
    used to get details of single selected items from the backend to display as single item
  */
  getsingleItem(id):Observable<List[]>{
  return this.http.post<List[]>('/getsingle',{id},httpOptions)
  }
}