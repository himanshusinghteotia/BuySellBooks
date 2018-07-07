import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { AddlistService } from '../addlist.service'
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

  public imagename: string;
  public selectedFile: File;

  constructor(private addlistservice: AddlistService, private http: HttpClient) { }

  /*
    function to add the entered details of the books in the database 
   */
  addList(frm) {
    let obj = JSON.parse(localStorage.getItem("user"));
    if(frm.value.cond=="--select--")
    {
      swal("Error!","Need to fill all the fields.", "error")
    }
    else
    {
      let list: List = {
        bkname: frm.value.bkname,
        autname: frm.value.autname,
        imgname: this.imagename,
        price: frm.value.price,
        cond: frm.value.bcond,
        userSid: parseInt(obj.sid)
      }
      //service to add book details
      this.addlistservice.addlist(list).subscribe((success) => {
        swal({
          title: "Book Added For Sale.",
          icon: "success"
        })
      }, error => {
        swal("Error!", error.error, "error")
      })
    }
  }

  /*
    function to check to file upload change
   */
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  /*
    function to upload the file to the disk storage using multer at backend
  */
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('/upload', uploadData).subscribe(event => {
      this.imagename = event.toString();
      if (this.imagename != null) {
        swal({
          title: "Image Uploaded.",
          icon: "success"
        })
      }
    });
  }

  ngOnInit() {
  }
}