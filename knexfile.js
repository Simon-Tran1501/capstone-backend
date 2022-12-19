require("dotenv").config();
const { user, password } = process.env;
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: "capstone",
    user,
    password,
  },
};
