


const path = require('path');


module.exports.index = function(req, res){
    res.sendFile(path.join(__dirname, '../views/index.html'));
}

module.exports.allBookView = function(req, res){
    res.sendFile(path.join(__dirname, '../views/all_books.html'));
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