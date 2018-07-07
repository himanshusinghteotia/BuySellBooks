import { Component, OnInit } from '@angular/core';
import { WishshowService } from '../wishshow.service';
import { Wishlist } from '../wish';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public nowish;
  public wish: Wishlist[];
  
  constructor(private wishshowservice: WishshowService, private route: Router) { }

   /*
    function to route the page to the single view page of clicked item with it id in url
  */
  p_detail(lid) {
    this.route.navigate(['/listings/' + lid]);
  }
  
  /*
    function to get the wishes made by the user on whislist page
  */
  loadwish() {
    let obj = JSON.parse(localStorage.getItem("user"));
    this.wishshowservice.loadwsh(obj.sid).subscribe(wishes => {
      this.wish = wishes
      //checks if the user has made any request or not
      if (this.wish.length == 0) {
        this.nowish = true;
        swal("", "You have not made any Wish.", "error")
      }
      else {
        this.nowish = false;
      }
    })
  }
  
  ngOnInit() {
    this.loadwish();
  }
}
