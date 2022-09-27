const express = require("express");
const { faker } = require("@faker-js/faker");
const path = require("path");

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.static("./client/dist/"));

const todos = [1, 2, 3].map(() => {
  return { title: faker.company.name() };
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  res.json(todos[id]);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
