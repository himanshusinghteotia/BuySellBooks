import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public login;
  public message: string;

  constructor(private route: Router) { }

  /*
    function to remove the logged in user from the local storage
  */
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('flag');
    this.login = false;
    this.route.navigate(['']);
  }

  /*
    function to hide and show the various links in navigation bar according to the login status
  */
  hidecheck() {
    if (localStorage.getItem('flag') == "logged")
      return false;
    else if (localStorage.getItem('flag') == null)
      return true;
  }

  ngOnInit() {
    this.hidecheck();
  }
}