import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

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

  getData() {
    this.data = new Observable(observer => {
      const seq = ['a', 1, 'b', 3, 'c', {name:'John Smith'}];
      const doSequence = function(arr, idx) {
        setTimeout(() => {
          observer.next(arr[idx]);
          if (idx === arr.length - 1) {
            observer.complete();
          } else {
            doSequence(arr, ++idx);
          }
        }, 1000)
      }
      doSequence(seq, 0)

      // setTimeout(() => {
      //   observer.next('a');
      // }, 1000)
      // setTimeout(() => {
      //   observer.next('b');
      // }, 2000)
      // setTimeout(() => {
      //   observer.next('c');
      // }, 3000)
      // setTimeout(() => {
      //   observer.next('d');
      // }, 4000)
    })
    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
