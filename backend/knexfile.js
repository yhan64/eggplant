require('babel-register');

module.exports = {

  development: {
    client: 'pg',
    version: '9.7',
    connection: {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      user: 'eggplant',
      password: 'eggplant',
      database: 'eggplant',
    },
  },

  production: {
    client: 'pg',
    version: '9.7',
    connection: {
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      user: 'eggplant',
      password: 'eggplant',
      database: 'eggplant',
    },
  },
};
