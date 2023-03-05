import { commandPutItem, dynamoClient } from "../utils/AWS";
import books from "./books.json";
import { Book } from "./types";
import { v4 as uuidv4 } from "uuid";

export const getBooks = () => books;

export const addBook = async (Book: Book) => {
  const newBook = { id: uuidv4(), ...Book };
  return await dynamoClient.send(commandPutItem(newBook));
};
