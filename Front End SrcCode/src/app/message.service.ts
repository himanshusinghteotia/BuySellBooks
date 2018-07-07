import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Message } from './message'

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http: HttpClient) { }

  /*
    used to send message to the backend messages table using httpclient 
  */
  sendmessage(message: Message): Observable<Message> {
    return this.http.post<Message>('/sendmsg', message, httpOptions)

  }

  /*
    used to get all the message from backend of the logged in user using httpclient
  */
  loadmessage(id: number): Observable<Message[]> {
    return this.http.post<Message[]>('/loadmsg', { id }, httpOptions)
  }
}
