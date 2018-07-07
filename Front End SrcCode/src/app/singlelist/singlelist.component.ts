import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../list';
import { GetlistService } from '../getlist.service';
import { WishlistService } from '../wishlist.service';
import { Wishlist } from '../wish';
import { Message } from '../message';
import { MessageService } from '../message.service'

@Component({
  selector: 'app-singlelist',
  templateUrl: './singlelist.component.html',
  styleUrls: ['./singlelist.component.css']
})
export class SinglelistComponent implements OnInit {
  item_id: Number;
  public item: List[];

  constructor(private route: ActivatedRoute, private getlistservice: GetlistService, private wishlistservice: WishlistService, private messageservice: MessageService) {
    this.item_id = parseInt(this.route.snapshot.params.id);
  }

  /*
    Function to get details of the items wanted to be viewed as single on the page
  */
  getsingleitems() {
    this.getlistservice.getsingleItem(this.item_id).subscribe(items => {
      this.item = items
    });
  }

  /*
    function to add books in the wishlist
  */
  addwish(event: MouseEvent, sid) {
    let obj = JSON.parse(localStorage.getItem("user"));
    //checks if the book user want to add in wishlist is his own book uploaded by him to sell
    //As in our website every user got a sellerid so he may act as seller or customer
    if (sid == obj.sid) {
      swal("This is your own product.", "", "error")
    }
    else {
      let wish: Wishlist = {
        sid: parseInt(obj.sid),
        lid: parseInt(event.srcElement.id)
      }
      this.wishlistservice.addwishList(wish).subscribe((success) => {
        swal({
          title: "Wish has been made.",
          icon: "success"
        });
      }, error => {
        swal("Error!", error.error, "error")
      })
    }
  }

  /*
    Function to send messages to the seller by sharing the contact details
  */
  sendmsg(sid, bkname, lid) {
    let obj = JSON.parse(localStorage.getItem("user"));
    //checks if the seller is the logged in user or not and display error if he try to send message to himself
    if (sid == obj.sid) {
      swal("This is your own product.", "", "error")
    }
    else {
      let message: Message = {
        msg: "I am " + obj.name + " and interested to buy your product " + bkname + " with productid " + lid + ". Kindly contact me at " + obj.email + " or call me on " + obj.phone,
        sid: sid
      }
      confirm("Sending your message as" + "\" " + message.msg + "\"");
      this.messageservice.sendmessage(message).subscribe((success) => {
        swal({
          title: "Message send.",
          icon: "success"
        });
      }, error => {
        swal("Error!", error.error, "error")
      })
    }
  }

  ngOnInit() {
    this.getsingleitems();
  }
}