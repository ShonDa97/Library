import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5031;

app.get("/", (_req, res) => {
  console.log("init ping");
  res.send("ok");
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
