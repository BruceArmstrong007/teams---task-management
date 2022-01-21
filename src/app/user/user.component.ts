import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  notifications : Boolean = false;
  url : String = '';
  constructor(private router : Router) {
    let arr = this.router.url.split('/');
    this.url = arr[arr.length -1];
   }

  ngOnInit(): void {
  }

  notify(){
    this.notifications = !this.notifications;
  }

}
