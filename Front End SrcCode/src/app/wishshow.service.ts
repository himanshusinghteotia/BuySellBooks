import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{Observable} from 'rxjs'
import { Wishlist } from './wish';

const httpOptions={
  headers: new HttpHeaders({'content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class WishshowService {
  constructor(private http:HttpClient) { }
  
  /*
    used to load the wishes made by the logged in user through it id
  */
  loadwsh(id:number):Observable<Wishlist[]>{
    return this.http.post<Wishlist[]>('/getwish', {id}, httpOptions)
  }
}