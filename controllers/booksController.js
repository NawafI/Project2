//require our dependencies
var express = require('express');
var router = express.Router();

var book = require('../models/book');
var author = require('../models/author');


router.get('/', book.getAll, renderIndex);
router.get('/new', book.getAll, renderNew);
router.get('/:id', book.find, rendershow);
router.get('/:id/edit', book.find, renderEdit);

router.post('/', book.create, author.create, redirectShow);// added new redirct for a create a new author

// router.post('/', book.create, redirectShow);
router.put('/:id', book.update,redirectShow);

router.delete('/:id', book.delete, redirectIndex);

// post '/'
// put '/:id'
// delete '/:id'



function renderIndex(req, res){
    var mustacheVariables = {
      bookList: res.locals.book
    }
    console.log(mustacheVariables)
    res.render('./book/index', mustacheVariables);
  }



  function rendershow(req, res){
    var mustacheVariables = {
      bookList: res.locals.book
    }
    console.log('+++++++++++++++',mustacheVariables)
    res.render('./book/show', mustacheVariables);
  }

  function renderEdit(req, res){
    var mustacheVariables = {
      bookList: res.locals.book
    }
    
    res.render('./book/edit', mustacheVariables);
  }



  function renderNew(req, res){
    var mustacheVariables = {
      bookList: res.locals.book
    }
    res.render('./book/new', mustacheVariables);
  }


  function redirectIndex(req,res){
    res.redirect('/book');
  }
  
  function redirectShow(req, res) {
    res.redirect(`/book/${res.locals.bookId}`);
  }


  // // added new redirect 
  // function redirectShow(req, res) {
  //   res.redirect(`/author/${res.locals.authorId} `);
  // }

  
module.exports = router;