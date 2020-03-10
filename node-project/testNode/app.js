///////////////////////////////////////////////////////////////////////////////////////////////
// 파일명 : app.js
// 20200218 James
// 현재 프로젝트의 중심파일
//
// 서버 설정 / 미들웨어 정의 / 라우트 정의 등 여러가지를 설정하고,
// 서버 운영을 위한 로직을 작성
//
// 호스트주소:8000 접속시 login화면 출력
/////////////////////////////////////////////////////////////////////////////////////////////////

//필요한 모듈 선언
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//var menuCrawling = require("./public/javascripts/crawling.js"); //20200310 delete menu crawling 모듈
var app = express();

//라우팅 모듈 선언
var indexRouter = require("./routes/login"); // indexRouter는 ~/routes/login.js 파일을 사용하겠다는 의미. 확장자 ".js"생략함
var usersRouter = require("./routes/users");
var modulesRouter = require("./routes/modules");

//mysql db connection
var mysqlDB = require("./conf/saeamus-db"); //db연결설정 모듈을 선언 ~/conf/saeamus-db.js 파일을 사용하겠다는 의미
mysqlDB.connect(); //db를 연결 한다
//db연결 테스트....query문을 실행하여 error여부 확인후 정상이면 콘솔에 "DB 연결성공" 출력한다.
mysqlDB.query("SELECT * from members", function(err, rows, fields) {
  if (!err) {
    console.log("app.js에서 DB연결 성공");
    //menuCrawling(); //20200310 delete crawling, db 연결까지 성공하면 menu item 변경사항을 update 한다.
  } else console.log("Error while performing Query.", err);
});
//mysqlDB.connect(); //참고: db를 연결을 끊는 명령

// view engine setup
app.set("views", path.join(__dirname, "views")); //뷰 페이지의 폴더 기본 경로로 __dirname(현 project 폴더)/views/ 이름의 폴더를 사용하겠다는 의미
app.set("view engine", "ejs"); //view 엔진으로 HTML이 아닌 ejs 템플릿 엔진을 사용하겠다.
app.engine("html", require("ejs").renderFile); //ejs 엔진으로 html파일을 랜더링 가능하게 해준다

// express 서버 포트는 8000이다(cafe24 호스팅 서버는 8001 포트 사용)
//AWS EC2서버는 반드시 보안설정에 가서 인바운드 포트(여기서는8000)를 접속가능한 상태로 설정해야한다.안그럼 연결 안됨
app.set("port", process.env.PORT || 8000);

//미들웨어 등록
//개발에 필요한 기본적인 미들웨어들은 express-generator가 자동으로 등록
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//request 요청 URL과 처리 로직을 선언한 라우팅 모듈 매핑
//상단의 라우팅 모듈 선언과 연결되는 부분
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/modules", modulesRouter);

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

//20200227 package.json의   "start": "nodemon app.js" 를   "start": "nodemon ./bin/www" 로 변경
//20200227 아래 서버생성문 삭제
//서버 생성. 실행되면 포트8000의 HTTP request가 들어올때까지 대기
// var server = app.listen(app.get("port"), function() {
//   console.log(
//     "app.js서버 실행문,Express server listening on port " +
//       server.address().port
//   );
// });
