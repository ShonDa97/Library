import { Book, Language } from "../services/types";

const parseAuthor = (authorFromRequest: any): string => {
  if (!isString(authorFromRequest)) {
    throw new Error("Incorrect or missing author");
  }

  return authorFromRequest;
};
const parseCountry = (countryFromRequest: any): string => {
  if (!isString(countryFromRequest)) {
    throw new Error("Incorrect or missing country");
  }

  return countryFromRequest;
};

const parseImageLink = (imageLinkFromRequest: any): string => {
  if (!isValidUrl(imageLinkFromRequest)) {
    throw new Error("Incorrect or missing link of image");
  }

  return imageLinkFromRequest;
};
const parseLanguage = (laguageFromRequest: any): Language => {
  if (!isLanguage(laguageFromRequest)) {
    throw new Error("Incorrect or missing language");
  }

  return laguageFromRequest;
};
const parseTitle = (titleFromRequest: any): string => {
  if (!isString(titleFromRequest)) {
    throw new Error("Incorrect or missing title");
  }

  return titleFromRequest;
};
const parseYear = (yearFromRequest: any): number => {
  if (!isYear(yearFromRequest)) {
    throw new Error("Incorrect or missing year");
  }

  return yearFromRequest;
};
const parseLend = (lendFromRequest: any): boolean => {
  if (!isBoolean(lendFromRequest)) {
    throw new Error("Incorrect or missing lend");
  }

  return lendFromRequest;
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};
const isValidUrl = (urlString: string): boolean => {
  let url;
  try {
    url = new URL(urlString);
  } catch (e) {
    return false;
  }
  return url.protocol === "https:";
};

const isLanguage = (param: any): boolean => {
  return Object.values(Language).includes(param);
};

const isYear = (year: number): boolean => {
  return typeof year === "number" && year.toString().length === 4;
};

const isBoolean = (lend: boolean): boolean => {
  return typeof lend === "boolean";
};

export const checkBook = (object: any): Book => {
  const newBook: Book = {
    author: parseAuthor(object.author),
    country: parseCountry(object.country),
    imageLink: parseImageLink(object.imageLink),
    language: parseLanguage(object.language),
    title: parseTitle(object.title),
    year: parseYear(object.year),
    lend: parseLend(object.lend),
  };

  return newBook;
};
