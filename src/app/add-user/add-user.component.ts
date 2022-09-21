import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.userService.addUser(this.user).subscribe(
      json => {
        Swal.fire({
          icon: 'success',
          title: 'User added',
          text: `${json.message}`
        })
      }
    )
  }

}
