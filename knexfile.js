// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: process.env.CLIENT,
    connection: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PW,
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'formula1',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'formula1',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
