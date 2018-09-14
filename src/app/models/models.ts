export interface User {
  firstName: string,
  lastName: string,
  email: string,
  isActive?: boolean,
  registered?: Date,
  hide?: boolean
}

export interface Post {
  id: number,
  title: string,
  body: string
}