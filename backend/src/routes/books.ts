import express from "express";
import * as bookService from "../services/bookService";
import { checkBook } from "../utils/validation";

const router = express.Router();

router.get("/books", async (_req, res) => {
  try {
    const books = (await bookService.getBooks()).Items;
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

export default router;
