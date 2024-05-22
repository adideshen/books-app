const loginQuery =
  "SELECT name, password FROM users WHERE email = $1";

module.exports = { loginQuery };
