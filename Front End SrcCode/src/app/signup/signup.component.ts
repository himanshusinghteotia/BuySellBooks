import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AdduserService } from '../adduser.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private adduserservice: AdduserService) { }
  
  /*
    Function to register user, various validation applied in backend so displays error messages accordingly
  */
  addUser(frm) {
    let user: User = {
      name: frm.value.name,
      email: frm.value.email,
      college: frm.value.college,
      address: frm.value.address,
      phone: frm.value.phone,
      password: frm.value.password
    }
    this.adduserservice.adduser(user).subscribe((success) => {
      swal("Registered","welcome","success");
    }, error => {
      swal("Error!", error.error, "error")
    })
  }
  
  ngOnInit() {
  }
}