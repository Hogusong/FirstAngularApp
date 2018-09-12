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
        age: 44,
        address: {
          street: '896 37th Ave',
          city: 'Dallas',
          state: 'TX'
        },
        isActive: true,
        balance: 100,
        registered: new Date('01/02/2018 08:30:00')
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
        isActive: false,
        balance: 25,
        registered: new Date("07/21/2015 15:11:11")
      },
      {
        firstName: 'Lumana',
        lastName: 'Rashid',
        age: 37,
        image: 'http://lorempixel.com/600/600/people/7',
        address: {
          street: '1702 Dillon Rd',
          city: 'Maple Glen',
          state: 'PA'
        },
        isActive: true,
        balance: 125,
        registered: new Date("01/15/2016 11:20:00")

      }];
  
      this.addUser({
        firstName: 'David',
        lastName: 'Paker',
        image: 'http://lorempixel.com/600/600/people/3',
        age: 37,
        isActive: false,
        balance: 225,
        registered: new Date("10/21/2016 13:10:10")

      });
      // this.users = [];
      this.loaded = true;
    }, 500)
  }

  addUser(user: User) {
    this.users.push(user);
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
