const insertUserQuery =
  "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);";

module.exports = { insertUserQuery };
