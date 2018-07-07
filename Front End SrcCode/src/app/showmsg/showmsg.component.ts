import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-showmsg',
  templateUrl: './showmsg.component.html',
  styleUrls: ['./showmsg.component.css']
})
export class ShowmsgComponent implements OnInit {
  public nomsg;
  public message: Message[];

  constructor(private messageservice: MessageService) { }

  /*
    function to display all the received message of the logged in user
  */
  loadmsg() {
    let obj = JSON.parse(localStorage.getItem("user"));
    this.messageservice.loadmessage(obj.sid).subscribe(messages => {
      this.message = messages;
      //checks if there are messages in the inbox or not
      if (this.message.length == 0) {
        this.nomsg = true;
        swal("", "You have not received any message.", "error")
      }
      else {
        this.nomsg = false;
      }
    });
  }

  ngOnInit() {
    this.loadmsg();
  }
}