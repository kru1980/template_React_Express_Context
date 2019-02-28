const express = require("express");
const todos = require("./api/todos.json");

const app = express();

app.get("/api/todos", (req, res) => {
  // const customers = [
  //   {id: 1, firstName: 'John', lastName: 'Doe'},
  //   {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  //   {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  // ];

  res.json(todos);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
