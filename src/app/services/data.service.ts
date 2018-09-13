import { Injectable } from '@angular/core';

import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() { 
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
  }

  getUsers(): User[] {
    return this.users
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
