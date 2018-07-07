import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CheckuserService } from '../checkuser.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public flag: string;

  constructor(private checkuserservice: CheckuserService, private route: Router) { }

  /*
    function to check if the user is registered or not.
  */
  checkUser(frm) {
    let user: User = {
      email: frm.value.email,
      password: frm.value.password
    }
    this.checkuserservice.checkuser(user).subscribe((success: any) => {
      localStorage.setItem("user", JSON.stringify(success));
      localStorage.setItem("flag", "logged");
      this.route.navigate(['/listings']);
    }, error => {
      swal("Error!", error.error,"error")
    })
  }
  /*
    fucntion to check if the user is logged in or not
    if logged in then route it to main home page
  */
  private getflag() {
    this.flag = localStorage.getItem('flag');
    if (this.flag == "logged") {
      this.route.navigate(['listings']);
    }
  }

  ngOnInit() {
    this.getflag();
  }
}