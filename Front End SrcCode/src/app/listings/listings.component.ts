import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Wishlist } from '../wish';
import { GetlistService } from '../getlist.service';
import { WishlistService } from '../wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  public item: List[];
  flag: string;
  searchText1 = '';
  searchText2 = '';
  searchText3 = '';
  cnd = '--select--';

  constructor(private getlistservice: GetlistService, private wishlistservice: WishlistService, private route: Router) { }

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
    function to route the page to the single view page of clicked item with it id in url
  */
  p_detail(lid) {
    this.route.navigate(['/listings/' + lid]);
  }

  /*
    function to check if the user is the logged in or not
    and navigate to login page if not 
  */
  private getflag() {
    this.flag = localStorage.getItem('flag');
    if (this.flag != "logged") {
      this.route.navigate(['']);
    }
  }
  
  /*
    function to get all the books entered by seller
  */
  getitems() {
    this.getlistservice.getItem().subscribe(items => {
      this.item = items;
    })
  }

  ngOnInit() {
    this.getitems();
    this.getflag();
  }
}