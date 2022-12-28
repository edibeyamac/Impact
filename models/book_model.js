const mssql = require(mssql);
const BookSchema = new mssql.Schema({
  Book_ID: {
    type: int,
    required:true
  },
    Category_name: {
    type: String,
  },
  Publisher_name: {
    type: String,
  },
 Numof_copies: {
   type: int,
   },
  Book_title: {
    type: String,
    default: "DEFAULT TITLE",
  },
 Pub_year: {
    type: int,
  },
 Book_author: {
    type: String,
  },
});
const BookModel = mssql.model("BookModel", BookSchema);
module.exports = BookModel;
const mssql = require('mssql')