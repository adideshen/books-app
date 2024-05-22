const { loginQuery } = require("./login");
const { emailExistsQuery } = require("./emailExists");
const { insertUserQuery } = require("./insertUser");
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

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "http://localhost:3000");
  response.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(express.json());
const port = 3001;

app.post("/users/login", async (request, response) => {
  try {
    const userEmail = request.body.email.toLowerCase();
    const queryResult = await client.query(loginQuery, [userEmail]);
    const user = queryResult.rows[0];

    if (user) {
      if (user.password === request.body.password) {
        response.status(201).json({ msg: "User was found.", name: user.name });
      } else {
        response.status(401).json({ msg: "Password is incorrect." });
      }
    } else {
      response.status(400).json({ msg: "User wasn't found." });
    }
  } catch (error) {
    console.error("Error executing SQL query:", error);
    response.status(500).json({ msg: "Internal Server Error." });
  }
});

app.post("/users/sign-up", async (request, response) => {
  try {
    const userEmail = request.body.email.toLowerCase();
    const queryResult = await client.query(emailExistsQuery, [userEmail]);
    const user = queryResult.rows[0];

    if (user) {
      response.status(400).json({ msg: "This email is already used." });
    } else {
      const { name, email, password } = request.body;
      await client.query(insertUserQuery, [
        name,
        email.toLowerCase(),
        password,
      ]);
      response
        .status(200)
        .json({ msg: "User signed up succefully", name: request.body.name });
    }
  } catch (error) {
    console.error("Error executing SQL query:", error);
    response.status(500).json({ msg: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
