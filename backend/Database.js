// MySQL Connection
const mysql = require("mysql");
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'downloads_admin_project'
});
 
db.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err.code);
    console.error(err.message);
    return;
  }
  console.log('Connected to the database');
});

  
module.exports = db;