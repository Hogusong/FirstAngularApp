import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
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

  constructor(private dataService: DataService) { 
    this.inItUser();
  }

  ngOnInit() {
    this.users = this.dataService.getUsers();
    this.loaded = true;
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

      this.dataService.addUser(value);
      this.form.reset();
    }
  }

  toggleNewBtn() {
    this.showEditForm=!this.showEditForm
    if (!this.showEditForm) this.inItUser()
  }
}
