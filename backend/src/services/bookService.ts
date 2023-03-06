import { v4 as uuidv4 } from "uuid";
import { commandGetItems, commandPutItem, documentClient } from "../utils/AWS";
import { Book, BookToEdit } from "./types";
import { tableNameBooks } from "../utils/constants";

export const getBooks = async () =>
  (await documentClient.send(commandGetItems(tableNameBooks))).Items;

export const addBook = async (Book: Book) => {
  const newBook = { id: uuidv4(), ...Book };
  return await documentClient.send(commandPutItem(tableNameBooks, newBook));
};

export const editBook = async (book: BookToEdit) => {
  const { lend, ...newBook } = book;
  const bookToEdit = { lend: !lend, ...newBook };
  return await documentClient.send(commandPutItem(tableNameBooks, bookToEdit));
};

export const getBorrowedBooks = async () => {
  const borrowedBooks = await documentClient.send(
    commandGetItems(tableNameBooks, {
      FilterExpression: "lend = :lend",
      ExpressionAttributeValues: {
        ":lend": true,
      },
    })
  );
  console.log("❗❗ ~ getBorrowedBooks ~ borrowedBooks:", borrowedBooks);

  return borrowedBooks.Items;
};
