//  '?' : remark as optional
export interface Address {
  street?: string,
  city?: string,
  state?: string
}

export interface User {
  firstName: string,
  lastName: string,
  age?: number,
  image?: string,
  address?: Address,
  isActive?: boolean,
  balance?: number,
  registered?: Date,
  hide?: boolean
}

export interface Employee {
  firstName: string,
  lastName: string,
  birthday: Date,
  position: string,
  started: Date,
  address?: Address
}