import { v4 as uuidv4 } from "uuid";
import { commandGetItems, commandPutItem, documentClient } from "../utils/AWS";
import { Book } from "./types";
import { tableNameBooks } from "../utils/constants";

export const getBooks = async () =>
  (await documentClient.send(commandGetItems(tableNameBooks))).Items;

export const addBook = async (Book: Book) => {
  const newBook = { id: uuidv4(), ...Book };
  return await documentClient.send(commandPutItem(tableNameBooks, newBook));
};
