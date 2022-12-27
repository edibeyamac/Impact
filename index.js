const sql = require('mssql/msnodesqlv8');

const config = {
  server: 'localhost',
    driver:"msnodesqlv8",
    database: 'Library Database',
    options:{
        useUTC:true,
        trustedConnection:true
    },


};

const pool = new sql.ConnectionPool(config);

pool.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to database');

    const request = new sql.Request(pool);
    request.query('SELECT * FROM Users', (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
      }
    });
    
  }
});