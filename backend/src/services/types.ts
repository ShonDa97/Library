export interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: Language;
  title: string;
  year: number;
  lend: boolean;
}

export interface BookToEdit extends Book {
  id: string;
}

export interface BookToLend extends Book {
  id: string;
}

export enum Language {
  English = "EN",
  Spanish = "ES",
}

export interface User {
  userName: string;
  document: string;
  address: string;
  phone: string;
}

export interface UserToEdit extends User {
  id: string;
}

export type UserToDelete = Omit<
  UserToEdit,
  "userName" | "document" | "address" | "phone"
>;
