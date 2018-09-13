import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User ;
  users: User[];
  loaded = false;
  enableAdd = true;
  showExtended = true;
  showEditForm = false;
  @ViewChild('userForm') form: any;

  constructor() { 
    this.inItUser();
  }

  ngOnInit() {
    setTimeout(() => {
      this.users = [{
        firstName: 'Mike',
        lastName: 'Park',
        email: 'mike@yahoo.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Narae',
        lastName: 'Song',
        email: 'narbar@cornell.com',
        isActive: false,
        registered: new Date("07/21/2015 15:11:11"),
        hide: true
      },
      {
        firstName: 'Lumana',
        lastName: 'Rashid',
        email: 'rashid@saif.com',
        isActive: true,
        registered: new Date("01/15/2016 11:20:00"),
        hide: true
      },
      {
        firstName: 'David',
        lastName: 'Paker',
        email: 'paker@gmail.com',
        isActive: false,
        registered: new Date("10/21/2016 13:10:10"),
        hide: true
      }];
      this.loaded = true;
    }, 500)
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
      this.users.unshift(value);
      this.form.reset();
    }
  }

  toggleNewBtn() {
    this.showEditForm=!this.showEditForm
    if (!this.showEditForm) this.inItUser()
  }
}
