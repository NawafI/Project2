var db = require('../db/config');

var book = {};


book.getAll = function (req, res, next) {
    db.manyOrNone("SELECT * FROM book;")
    .then(function (result) {   

        res.locals.book = result; 
        next(); 
    })
    .catch(function(error){ 
      console.log(error); 
      next(); 
    })

}

book.find = function (req, res, next) {
    var id = req.params.id;
    db.oneOrNone("SELECT * FROM book WHERE id = $1;", [id])
      .then(function(result){
        res.locals.book = result;
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

  book.create = function(req, res, next){
    db.one("INSERT INTO book(title, img_url, author, discription) VALUES($1, $2, $3, $4) RETURNING id;",
    [req.body.title, req.body.img_url, req.body.author, req.body.discription,req.params.id])
    .then(function(result){
        res.locals.bookId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
 };


 book.delete = function(req, res, next){
    console.log('**********')
    db.none('DELETE FROM book WHERE id=$1;', [req.params.id])
      .then(function(){
        console.log('successful delete');
        next();
      })
      .catch(function(error){
        console.log(error);
        next();
      })
  }

  book.update = function (req, res, next) {
    console.log('******', req.params)
    db.one('UPDATE book SET title=$1, img_url=$2, author=$3, discription=$4 WHERE id=$5 RETURNING id;',
          [req.body.title, req.body.img_url, req.body.author, req.body.discription, req.params.id])
      .then(function (result) {
        res.locals.bookId = result.id;
        next();
      })
      .catch(function (error) {
        console.log(error);
        next();
      })
  }

module.exports = book;