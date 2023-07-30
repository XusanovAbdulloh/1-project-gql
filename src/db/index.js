const knex = require("knex");
const config = require("../shared/config/index.js")

const db = knex({
  client: 'pg',
  connection: {
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    user: config.db.user,
    password: config.db.password,
  },
});

module.exports = db