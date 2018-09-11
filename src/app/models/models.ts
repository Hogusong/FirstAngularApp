export interface Address {
  street: string,
  city: string,
  state: string
}

export interface User {
  firstName: string,
  lastName: string,
  age: number,
  address: Address
}

export interface Employee {
  firstName: string,
  lastName: string,
  birthday: Date,
  position: string,
  started: Date,
  address: Address
}