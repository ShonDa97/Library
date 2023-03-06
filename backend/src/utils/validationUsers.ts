import { User, UserToDelete, UserToEdit } from "../services/types";

const parseId = (idFromRequest: any): string => {
  if (!isString(idFromRequest)) {
    throw new Error("Incorrect or missing id");
  }
  return idFromRequest;
};
const parseName = (nameFromRequest: any): string => {
  if (!isString(nameFromRequest)) {
    throw new Error("Incorrect or missing userName");
  }
  return nameFromRequest;
};
const parseDocument = (documentFromRequest: any): string => {
  if (!isDocument(documentFromRequest)) {
    throw new Error("Incorrect or missing document");
  }
  return documentFromRequest;
};
const parseAddress = (addressFromRequest: any): string => {
  if (!isString(addressFromRequest)) {
    throw new Error("Incorrect or missing address");
  }
  return addressFromRequest;
};
const parsePhone = (phoneFromRequest: any): string => {
  if (!isPhone(phoneFromRequest)) {
    throw new Error("Incorrect or missing phone");
  }
  return phoneFromRequest;
};

const isString = (string: string): boolean => {
  return typeof string === "string";
};

const isDocument = (string: string): boolean => {
  const regex = new RegExp(/^\d+$/);
  return regex.test(string);
};

const isPhone = (string: string): boolean => {
  const regex = new RegExp(/^\d+$/);
  return regex.test(string) && string.length === 10;
};

export const checkUser = (object: any): User => {
  const newUser: User = {
    userName: parseName(object.userName),
    document: parseDocument(object.document),
    address: parseAddress(object.address),
    phone: parsePhone(object.phone),
  };

  return newUser;
};

export const checkUserToEdit = (object: any): UserToEdit => {
  const newUser: UserToEdit = {
    id: parseId(object.id),
    userName: parseName(object.name),
    document: parseDocument(object.document),
    address: parseAddress(object.address),
    phone: parsePhone(object.phone),
  };

  return newUser;
};

export const checkId = (object: any): UserToDelete => {
  const userId: UserToDelete = {
    id: parseId(object.id),
  };

  return userId;
};
