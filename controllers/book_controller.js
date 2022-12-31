


const path = require('path');

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


module.exports.index = function(req, res){
    res.sendFile(path.join(__dirname, '../views/index.html'));
}



// tüm tabloyu listeler

module.exports.allBookView = function(req, res){
   
    pool.connect((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Connected to database');
      
          const request = new sql.Request(pool);
          request.query(`SELECT * FROM Book` , (err, result) => {
            if (err) {
              console.error(err);
            } else {
                const data = result.recordset
                res.render("C:\\Users\\Edibe\\Downloads\\Impact\\Impact\\views\\abc.ejs",{data:data})

            }
          });
      
        }
    })

}

// detaya gider

module.exports.getBookView = function(req, res){
    console.log("req = ",req.query.id)
   
   
    pool.connect((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Connected to database');
      
          const request = new sql.Request(pool);
          request.query(`SELECT * FROM Book where Book_ID = ${req.query.id}` , (err, result) => {
            if (err) {
              console.error(err);
            } else {
                console.log(result.recordset[0]);
                res.render('C:\\Users\\Edibe\\Downloads\\Impact\\Impact\\views\\detailBook.ejs', { param: req.query.id , data:result.recordset[0]});
              
            }
          });
      
        }
    })
}

module.exports.createBookView = function(req, res){
    pool.connect((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Connected to database');
      
          const request = new sql.Request(pool);
          request.query(`` , (err, result) => {
            if (err) {
              console.error(err);
            } else {
                console.log("result.recordset[0]");
                res.render('C:\\Users\\Edibe\\Downloads\\Impact\\Impact\\views\\createBook.ejs');
              
            }
          });
      
        }
    })
}

module.exports.createBookViewPOST = function(req, res){
    console.log(typeof(req.body.Category_name))
    pool.connect((err) => {
        if (err) {
          console.error(err);
        } else {

          const request = new sql.Request(pool);
          request.query(`INSERT INTO Book (Category_name) Values ('${req.body.Category_name}',${eq.body.Publisher_name})` , (err, result) => {
            if (err) {
              console.error(err);
            } else {
                console.log("result.recordset[0]");
                res.redirect('/allBook');
            }
          });
      
        }
    })

}

module.exports.deleteBookView = function(req, res){
    console.log(req.query.id)
    pool.connect((err) => {
        if (err) {
          console.error(err);
        } else {

          const request = new sql.Request(pool);
          request.query(`DELETE FROM Book WHERE Book_ID = ${req.query.id};` , (err, result) => {
            if (err) {
              console.error(err);
            } else {
                res.redirect('/allBook');
            }
          });
      
        }
    })

}



module.exports.adventureView = function(req, res){
    res.sendFile(path.join(__dirname, '../views/adventure.html'));
}


module.exports.romanceView = function(req, res){
    res.sendFile(path.join(__dirname, '../views/romance.html'));
}


module.exports.fantasyView = function(req, res){
    res.sendFile(path.join(__dirname, '../views/fantasy.html'));
}


module.exports.horrorView = function(req, res){
    res.sendFile(path.join(__dirname, '../views/horror.html'));
}

module.exports.scienceView = function(req, res){
    res.sendFile(path.join(__dirname, '../views/science_fiction.html'));
}

// module.exports.test = function(req, res){
//     res.sendFile(path.join(dirname, '../../login.html'));
// }





// //For Register Page
// const homeView = (req, res) => {
//     res.render("index.html", {
//     } );
// }
// // For View 
// const allBookView = (req, res) => {

//     res.render("allbooks", {
//     } );
// }
// const fantasyView = (req, res) => {

//     res.render("fantasy", {
//     } );
// }
// const horrorView = (req, res) => {

//     res.render("horror", {
//     } );
// }
// const adventureView = (req, res) => {

//     res.render("adventure", {
//     } );
// }
// const romanceView = (req, res) => {

//     res.render("romance", {
//     } );
// }
// module.exports =  {
//     homeView,
//     allBookView,
//     fantasyView,
//     horrorView,
//     adventureView,
//     romanceView
// };