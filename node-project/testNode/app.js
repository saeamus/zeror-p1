//필요한 모듈 선언
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

//라우팅 모듈 선언
var indexRouter = require("./routes/login");
var usersRouter = require("./routes/users");
var signupRouter = require("./routes/signup");
var welcomeRouter = require("./routes/welcome");

//db connection
var mysqlDB = require("./conf/saeamus-db");
mysqlDB.connect();
mysqlDB.query("SELECT * from members", function(err, rows, fields) {
  if (!err) console.log("The solution is: ", rows);
  else console.log("Error while performing Query.", err);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// express 서버 포트 설정(cafe24 호스팅 서버는 8001 포트 사용)
app.set("port", process.env.PORT || 8000);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/signup", signupRouter);
app.use("/welcome", welcomeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

//서버 생성
var server = app.listen(app.get("port"), function() {
  console.log("Express server listening on port " + server.address().port);
});
