import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-log-user',
  templateUrl: './log-user.component.html',
  styleUrls: ['./log-user.component.css']
})
export class LogUserComponent implements OnInit {

  user: User = new User()

  constructor( private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  logUser() {
    this.userService.logUser(this.user).subscribe(
      json => {
        Swal.fire({
          icon: 'success',
          title: 'Logged in!',
          text: `${json.message}`
        })
        sessionStorage.setItem("loggedUser",JSON.stringify(json.object))
        this.router.navigate(['/app']);
      }
    )
  }

}
