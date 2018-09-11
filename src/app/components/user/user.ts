import { Component } from '@angular/core';
import { User, Employee } from '../../models/models';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
  // template: '<h3>John Smith</h3>',
  // styles: [`h3 { color: orange }`],
})

export class UserComponent {
  // Properties
  user: User;     // use interface
  employee: Employee;
  birthday: Date;

  // Methods
  constructor() {
    this.user = {
      firstName: 'Narae',
      lastName: 'Song',
      age: 20,
      address: {
        street: '1904 24th Ave',
        city: 'Seattle',
        state: 'WA'
      }
    }
    this.birthday = new Date('11/25/1963')
  }

  ngOnInit() {
    this.user.age -= 1;
  }

  sayName() {
    return `Hello everyone. My name is ${this.user.firstName} ${this.user.lastName}`;
  }
}
