import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
import dontenv from "dotenv";
dontenv.config();

const dynamoClient = new DynamoDBClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_KEY!,
  },
});

export const documentClient = DynamoDBDocumentClient.from(dynamoClient);

export const commandPutItem = (tablename: string, data: any) => {
  return new PutCommand({
    TableName: tablename,
    Item: data,
  });
};

export const commandGetItems = (tablename: string) => {
  return new ScanCommand({
    TableName: tablename,
  });
};

export const deleteCommand = (tablename: string, data: any) => {
  return new DeleteCommand({ TableName: tablename, Key: data });
};
