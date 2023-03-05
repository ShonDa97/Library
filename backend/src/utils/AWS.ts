import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import dontenv from "dotenv";
import { tableName } from "./constants";
dontenv.config();

export const dynamoClient = new DynamoDBClient({
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY!,
    secretAccessKey: process.env.SECRET_KEY!,
  },
});

export const commandPutItem = (data: any) => {
  return new PutItemCommand({
    TableName: tableName,
    Item: marshall(data),
  });
};
