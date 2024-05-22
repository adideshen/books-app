const emailExistsQuery = "SELECT email FROM users WHERE email = $1";

module.exports = { emailExistsQuery };
