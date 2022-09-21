import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-app-screen',
  templateUrl: './app-screen.component.html',
  styleUrls: ['./app-screen.component.css']
})
export class AppScreenComponent implements OnInit {

  user: User

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("loggedUser") || '')
  }

}
