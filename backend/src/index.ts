import express from "express";
import booksRouter from "./routes/books";
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5031;

app.use("/api/library", booksRouter);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
