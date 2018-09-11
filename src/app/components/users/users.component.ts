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
  currentStyles = {};
  showExtended = true;

  constructor() { 
    this.setCurrentStyles();
  }

  ngOnInit() {
    setTimeout(() => {
      this.users = [{
        firstName: 'Mike',
        lastName: 'Park',
        age: 44,
        address: {
          street: '896 37th Ave',
          city: 'Dallas',
          state: 'TX'
        },
        isActive: true
      },
      {
        firstName: 'Narae',
        lastName: 'Song',
        age: 20,
        image: 'http://lorempixel.com/600/600/people/1',
        address: {
          street: '1700 Hilliard Ct',
          city: 'Ambler',
          state: 'PA'
        },
        isActive: false
      },
      {
        firstName: 'Cassidy',
        lastName: 'Williams',
        age: 27,
        image: 'http://lorempixel.com/600/600/people/7',
        address: {
          street: '1904 24th Ave',
          city: 'Seattle',
          state: 'WA'
        },
        isActive: true
      }];
  
      this.addUser({
        firstName: 'David',
        lastName: 'Paker',
        image: 'http://lorempixel.com/600/600/people/3',
        age: 37,
        isActive: false
      });
      // this.users = [];
      this.loaded = true;
    }, 500)
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentStyles() {
    this.currentStyles = {
      'btn-select' : this.enableAdd,
      'big-text': this.showExtended
    }
  }
}
