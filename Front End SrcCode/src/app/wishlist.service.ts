import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Wishlist } from './wish'

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient) { }
  
  /*
    used to add wishes to the wishlists table at backend with it user id and book id
  */
  addwishList(list: Wishlist): Observable<Wishlist> {
    return this.http.post<Wishlist>('/addwish', list, httpOptions)
  }
}