import { Component, OnInit } from '@angular/core';
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

  constructor() { 
    this.inIt();
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
      // this.users = [];
      this.loaded = true;
    }, 500)
  }

  // addUser(user: User) {
  //   this.users.push(user);
  //   this.inIt()
  //   this.showEditForm = false;
  // }

  inIt() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      registered: new Date(),
      isActive: true,
      hide: false,
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  toggleNewBtn() {
    this.showEditForm=!this.showEditForm
    if (!this.showEditForm) this.inIt()
  }
}
