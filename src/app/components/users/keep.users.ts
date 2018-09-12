import { Component, OnInit } from '@angular/core';
import { User } from '../../models/models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  loaded = false;
  enableAdd = true;
  currentClasses = {};
  currentStyles = {};
  showExtended = true;

  constructor() { 
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  ngOnInit() {
    setTimeout(() => {
      this.users = [{
        firstName: 'Mike',
        lastName: 'Park',
        email: 'mike@yahoo.com',
        age: 44,
        address: {
          street: '896 37th Ave',
          city: 'Dallas',
          state: 'TX'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Narae',
        lastName: 'Song',
        email: 'narbar@cornell.com',
        age: 20,
        address: {
          street: '1700 Hilliard Ct',
          city: 'Ambler',
          state: 'PA'
        },
        isActive: false,
        registered: new Date("07/21/2015 15:11:11"),
        hide: true
      },
      {
        firstName: 'Lumana',
        lastName: 'Rashid',
        email: 'rashid@saif.com',
        age: 37,
        address: {
          street: '1702 Dillon Rd',
          city: 'Maple Glen',
          state: 'PA'
        },
        isActive: true,
        registered: new Date("01/15/2016 11:20:00"),
        hide: false
      }];
  
      this.addUser({
        firstName: 'David',
        lastName: 'Paker',
        email: 'paker@gmail.com',
        age: 37,
        isActive: false,
        registered: new Date("10/21/2016 13:10:10"),
        hide: true
      });
      // this.users = [];
      this.loaded = true;
    }, 500)
  }

  addUser(user: User) {
    this.users.push(user);
    // this.inIt()
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-select' : this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    }
  }
}
