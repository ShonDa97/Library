import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb";
// import { marshall } from "@aws-sdk/util-dynamodb";
import dontenv from "dotenv";
import { tableName } from "./constants";
dontenv.config();

const dynamoClient = new DynamoDBClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_KEY!,
  },
});

export const documentClient = DynamoDBDocumentClient.from(dynamoClient);

export const commandPutItem = (data: any) => {
  return new PutCommand({
    TableName: tableName,
    Item: data,
  });
};

export const commandGetItems = () => {
  return new ScanCommand({
    TableName: tableName,
  });
};
