import { v4 as uuidv4 } from "uuid";
import {
  commandGetItems,
  commandPutItem,
  deleteCommand,
  documentClient,
} from "../utils/AWS";
import { tableNameUsers } from "../utils/constants";
import { User, UserToDelete, UserToEdit } from "./types";

export const getUsers = async () =>
  (await documentClient.send(commandGetItems(tableNameUsers))).Items;

export const addUser = async (user: User) => {
  const newId = `USER#${uuidv4()}`;
  const newUser = { pk: newId, sk: newId, ...user };
  return await documentClient.send(commandPutItem(tableNameUsers, newUser));
};
export const editUser = async (user: UserToEdit) => {
  const { id, ...filterBody } = user;
  const userToEdit = { pk: id, sk: id, ...filterBody };
  return await documentClient.send(commandPutItem(tableNameUsers, userToEdit));
};

export const deleteUser = async (user: UserToDelete) => {
  const userToDelete = { pk: user.id, sk: user.id };
  return await documentClient.send(deleteCommand(tableNameUsers, userToDelete));
};
