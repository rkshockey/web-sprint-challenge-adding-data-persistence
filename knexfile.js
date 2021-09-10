// do not make changes to this file
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  pool: { 
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
      conn.run('PRAGMA journal_mode = OFF');
    }
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/lambda.db3' },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};

