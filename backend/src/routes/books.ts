import express from "express";
import * as bookService from "../services/bookService";
import { lendBook } from "../services/userService";
import { checkBook } from "../utils/validationBooks";

const router = express.Router();

router.get("/books", async (_req, res) => {
  try {
    const books = await bookService.getBooks();
    res.send(books);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.post("/books/add", async (req, res) => {
  try {
    const newBook = checkBook(req.body);

    await bookService.addBook(newBook);
    res.send(newBook);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.post("/books/lend/user/:userid", async (req, res) => {
  try {
    const { userid } = req.params;
    const bookToLend = req.body;
    await bookService.editBook(bookToLend);
    await lendBook(bookToLend, userid);
    res.send("libro prestado");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.get("/books/borrowed", async (_req, res) => {
  try {
    const borrowedBooks = await bookService.getBorrowedBooks();
    res.send(borrowedBooks);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;
