const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "user",
  port: 1497,
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const users = [
  {
    name: "user1",
    email: "user1@gmail.com",
    password: 12345,
  },

  {
    name: "user2",
    email: "user2@gmail.com",
    password: 12345,
  },
];

app.post("/users/login", (request, response) => {
  const user = users.find((user) => user.email === request.body.email);
  if (user) {
    if (user.password === request.body.password) {
      response.status(201).json({ msg: "User was found.", name: user.name });
    } else {
      response.status(401).json({ msg: "Password is incorrect." });
    }
  } else {
    response.status(400).json({ msg: "User wasn't found." });
  }
});

app.post("/users/sign-up", (request, response) => {
  const user = users.find((user) => user.email === request.body.email);
  if (user) {
    response.status(400).json({ msg: "This email is already used." });
  } else {
    users.push(request.body);
    response
      .status(200)
      .json({ msg: "User was added succefully", name: request.body.name });
  }
});

// App listens to incoming requests here
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
