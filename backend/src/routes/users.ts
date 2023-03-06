import express from "express";
import * as userService from "../services/userService";
import { checkId, checkUser, checkUserToEdit } from "../utils/validationUsers";

const router = express.Router();

router.get("/users", async (_req, res) => {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.post("/users/add", async (req, res) => {
  try {
    const newUser = checkUser(req.body);
    await userService.addUser(newUser);
    res.send(newUser);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.put("/users/edit", async (req, res) => {
  try {
    const newUser = checkUserToEdit(req.body);
    await userService.editUser(newUser);
    res.send(newUser);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

router.delete("/users/delete", async (req, res) => {
  try {
    const userToDelete = checkId(req.body);
    await userService.deleteUser(userToDelete);
    res.send(userToDelete);
  } catch (error: any) {
    console.log("❗❗ ~ router.delete ~ error:", error);
    res.status(400).send(error.message);
  }
});

router.get("/users/:userId/books", async (req, res) => {
  try {
    const { userId } = req.params;
    const booksOfUser = await userService.getBooksOfUser(userId);
    res.send(booksOfUser);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;
