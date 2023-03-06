import { v4 as uuidv4 } from "uuid";
import {
  commandGetItems,
  commandPutItem,
  deleteCommand,
  documentClient,
} from "../utils/AWS";
import { prefixBooks, prefixUsers, tableNameUsers } from "../utils/constants";
import { BookToLend, User, UserToDelete, UserToEdit } from "./types";

export const getUsers = async () => {
  const { Items } = await documentClient.send(
    commandGetItems(tableNameUsers, {
      ProjectionExpression: "pk,userName,address,document,phone",
      FilterExpression: "NOT contains(sk,:sk)",
      ExpressionAttributeValues: {
        ":sk": "BOOK#",
      },
    })
  );

  if (!Items) {
    return Items;
  }
  const users = Items.map((item: any) => {
    const { pk, ...newItem } = item;
    return { id: pk.substring(prefixUsers.length), ...newItem };
    0;
  });
  return users;
};

export const addUser = async (user: User) => {
  const newId = `${prefixUsers}${uuidv4()}`;
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

export const lendBook = async (book: BookToLend, userId: string) => {
  const { id, lend, ...newBook } = book;
  const newPartitionKey = `${prefixUsers}${userId}`;
  const newSortKey = `${prefixBooks}${id}`;
  const bookToLend = {
    pk: newPartitionKey,
    sk: newSortKey,
    lend: !lend,
    ...newBook,
  };
  return await documentClient.send(commandPutItem(tableNameUsers, bookToLend));
};
