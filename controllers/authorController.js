var express = require('express');
var router = express.Router();

var author = require('../models/author');
var book = require('../models/book');


router.get('/', author.getAll, renderIndex);
router.get('/:id', author.find, author.findBybook,renderShow);
// router.put('/:id', author.update, redirectShow);


function renderIndex(req, res){
  
    var mustacheVariables = {
      authorList: res.locals.author
    }
    res.render('./author/index', mustacheVariables);
  }
  

  function renderShow(req, res){
    console.log("test", res.locals.author); 
  console.log("test", res.locals.authorbook ); 
    var mustacheVariables = {
      authorList: res.locals.author,
      bookList: res.locals.authorbook
    }
    res.render('./author/show', mustacheVariables);
  }

  // function redirectShow(req, res) {
  //   res.redirect(`/author/${res.locals.authorid} `);
  // }
module.exports = router;