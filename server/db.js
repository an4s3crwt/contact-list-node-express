const mysql = require('mysql2');

// Configuración de la base de datos
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',  
  password: '',  
  database: 'contact_db',  
});

module.exports = pool.promise();
