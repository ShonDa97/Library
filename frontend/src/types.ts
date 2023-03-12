export interface IconProps {
  width: number
  height: number
  strokeWidth: number
}

export interface Book {
  id: string
  author: string
  country: string
  imageLink: string
  language: Language
  title: string
  year: number
  lend: boolean
}

export enum Language {
  English = 'EN',
  Spanish = 'ES',
}

export type ListOfBooks = Book[]

export interface LendBook {
  userName: Pick<User, 'id'>
}

export type AddBook = Omit<Book, 'id'>

export interface User {
  id: string
  userName: string
  document: string
  address: string
  phone: string
}

export type ListOfUsers = User[]

export type AddUser = Omit<User, 'id'>
