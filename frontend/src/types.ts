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

export type AddBook = Omit<Book, 'id'>
