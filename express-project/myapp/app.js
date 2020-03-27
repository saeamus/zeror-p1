var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// router 설정
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view 경로 설정
app.set('views', path.join(__dirname, 'views'));

// 화면 engine을 ejs로 설정
app.set('view engine', 'ejs');
// html 파일 사용시 
app.engine("html", require("ejs").renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// css, javascript 등의 파일 사용을 위해 /public으로 설정
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
