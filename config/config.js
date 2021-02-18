require('dotenv-flow').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
  },

  test: {
    url: process.env.DATABASE_URL,
  },

  production: {
    url: process.env.DATABASE_URL,
    dialectOptions: { ssl: { rejectUnauthorized: false } },
  }
};
