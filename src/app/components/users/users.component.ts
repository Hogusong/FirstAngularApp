import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  user: User ;
  users: User[];
  loaded = false;
  enableAdd = true;
  showExtended = true;
  showEditForm = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private userService: UserService) { 
    this.inItUser();
  }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data)
    })
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  inItUser() {
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  onSubmit({value, valid}) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);
      this.form.reset();
    }
  }

  toggleNewBtn() {
    this.showEditForm=!this.showEditForm
    if (!this.showEditForm) this.inItUser()
  }
}
