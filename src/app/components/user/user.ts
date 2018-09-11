import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
  // template: '<h3>John Smith</h3>',
  // styles: [`h3 { color: orange }`],
})

export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age:number;
  address: object;
  numArray: number[];
  strArray: string[];
  mixArray: any[];
  myTuple: [string, number, boolean];
  un: undefined;

  // Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Smith';
    this.age = 30;
    this.address = {
      street: "8810 35th Ave NE",
      city: "Seattle",
      state: "WA",
      country: "USA",
      zipcode: '98940'
    };
    this.myTuple = ['hi', 112, true]
  
    this.increaseAge()
  }

  ngOnInit() {
    this.increaseAge()
  }

  sayName() {
    return `Hello everyone. My name is ${this.firstName} ${this.lastName}. (${this.un})`;
  }

  increaseAge() {
    this.age += 1;
  }

}