var db = require('../db/config');

var author = {};

author.getAll = function (req, res, next) {
    db.manyOrNone("SELECT * FROM author;")
    .then(function (result) {   

        res.locals.author = result; 
        console.log("----",result)
        next(); 
    })
    .catch(function(error){ 
      console.log(error); 
      next(); 
    })
}

author.find = function (req, res, next) {
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM author WHERE id = $1;", [id])
      .then(function(result){
        res.locals.author = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
    }

    author.findBybook = function (req, res, next) {
        db.manyOrNone("SELECT * FROM book WHERE author=$1;", [  res.locals.author.fullname])
          .then(function (result) {
            res.locals.authorbook = result;
            next();
          })
          .catch(function (error) {
            console.log(error);
            next();
          })
      }
      author.create = function(req, res, next){
        db.one("INSERT INTO author(fullName, book_id) VALUES($1, $2) RETURNING id;",
        [req.body.fullName, res.locals.bookId])
        .then(function(result){
            console.log('&&&&&&&&&');
            res.locals.authorid = result.id;
            next();
        }).catch(function(error){
            console.log(error);
            next();
        });
     };
  
    

  module.exports = author;