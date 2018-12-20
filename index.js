var express = require('express');
var app = express();
var port = process.env.port || 3000;

// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/public'));

// body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// logger config 
var logger = require('morgan');
app.use(logger('dev'));

// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

var booksController = require('./controllers/booksController');
var authorController = require('./controllers/authorController');

// configuring mustache to be our view engine
app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

// set.up home route
app.get('/', function(request, response){
  response.render('./index');
})



app.use('/book', booksController);
app.use('/author', authorController);



// set up our app to listen to a port
app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
})