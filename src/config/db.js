// /config/db.js
const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conectado a la base de datos MSSQL');
    return pool;
  })
  .catch(err => console.error('Error al conectar a la base de datos MSSQL', err));

module.exports = {
  sql, poolPromise, config  // Asegúrate de exportar 'config'
};
