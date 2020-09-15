var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// process.env.AUTHORS_DB=path.join(__dirname,'data','authors.db');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookRouter=require('./routes/bookmanagerController');
var authorRouter=require('./routes/author-controller');
var bookApiRouter= require('./routes/bookmanager-api-controller');

var app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//npm -i --save express-ejs-layout
var expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('layout','masterpage');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books',bookRouter);
app.use('/authors',authorRouter);
app.use('/api/books', bookApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
