export interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: Language;
  title: string;
  year: number;
  lend: boolean;
}

export interface UpdateBook extends Book {
  id: string;
}

export enum Language {
  English = "EN",
  Spanish = "ES",
}
