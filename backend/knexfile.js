require("babel-register");

module.exports = {

  development: {
    client: 'pg',
    version: '9.7',
    connection: {
      host : process.env.POSTGRES_HOST || '127.0.0.1',
      user : 'local_alive',
      password : 'local_alive',
      database : 'local_alive'
    }
  },

  production: {
    client: 'pg',
    version: '9.7',
    connection: {
      host : process.env.POSTGRES_HOST || '127.0.0.1',
      user : 'prod_alive',
      password : 'prod_alive',
      database : 'prod_alive'
    }
  }
};
