///////////////////////////////////////////////////////////////////////////////////////////
//파일명: login.js
//사이트 접속시 로그인 화면을 브라우저에 전송하고 로그인 기능을 수행
//app.js에서 아래 두줄의 라우터 선언으로 호스트주소:8000으로 접속시 이 파일(login.js)이  실행됨
//   app.use("/", indexRouter);
//   var indexRouter = require("./routes/login");
///////////////////////////////////////////////////////////////////////////////////////////

var express = require("express");
var router = express.Router();
const crypto = require("crypto");
var mysqlDB = require("../conf/saeamus-db"); //이것을 지우면 mysqlDB가 없다고 에러난다.매 파일마다 선언???

//라우터의 get()함수를 이용해 request URL('/')에 대한 업무처리 로직 정의
//즉,호스트주소:8000으로 접속시 index route
router.get("/", function(req, res, next) {
  res.render("login", { title: "Log In Page" }); // ~/views/login.ejs를 브라우저로 전송하고 탭제목은 "Log In Page" 이다
});

//////////////////////////////////////////////////////////////////////////////////////////
//로그인 방법 1 :암호화 방법
//입력된 userId의 해당 data를 db에서 불러온다.
//회원 가입시 password를 암호화하여 저장하였으므로
//input password를 동일한 방법으로 함호화한후에  db에서 불러온 password랑 비교하여야한다.
//////////////////////////////////////////////////////////////////////////////////////////
router.post("/", async function(req, res, next) {
  let body = req.body;
  var sql = "select * from user_info where userId=?"; //query문 ?표는 아래 query문에서 두번째 파라메타( [body.userId])로 전달

  mysqlDB.query(sql, [body.userId], function(err, results) {
    if (err) {
      res.send("error : " + err); //err 발생시 화면에 에러메세지 출력
    }
    if (!results[0]) {
      res.render("nodata"); //query 결과가 undefined 즉, db에 userId가 없는 경우, 화면에  메세지 출력 (~/views/nodata.ejs)
    }
    var result = results[0]; //query 결과를 result로 받음

    let dbPassword = result.password; //db에 저장된 password(암호화됨)
    let inputPassword = body.userPw; // 입력 password(text string)
    let salt = result.salt; //db에 저장된 salt값
    let hashPassword = crypto
      .createHash("sha512")
      .update(inputPassword + salt)
      .digest("hex"); // input password를 회원 가입때와 동일한 방법으로 암호화

    if (dbPassword === hashPassword) {
      res.render("welcome", { name: body.userId }); //암호화된 password를 비교하여 같으면 환영 메세지 출력(~/views/welcome.ejs)
    } else {
      res.render("nodata"); //password가 다르면 화면에  메세지 출력 (~/views/nodata.ejs)
    }
  });
});

// ////////////////////////////////////////////////////////////////////////////////////
// //로그인 방법 2 :암호화 안하는 방법
// //주의 : 테이블 'members' 를 사용한다. (암호화 방법하고 사용하는 테이블이 다름)
// //호스트주소:8000으로 id와 pw입력하고 summit시 route, 즉 Login 버튼을 클릭했을때 동작
// //입력한 id 와 pw를 비교하여 동일하면 로그인 성공
// ///////////////////////////////////////////////////////////////////////////////////
// router.post("/", function(req, res, next) {
//   var userId = req.body["userId"]; // 로그인페이지의 name이 "userId"인 항목의 입력을 가져온다
//   var userPw = req.body["userPw"]; // 로그인페이지의 name이 "userPw"인 항목의 입력을 가져온다
//   var sql =
//     "select * from members where id='" + userId + "' and pw='" + userPw + "'"; //saeamus db의 members 테이블에서 입력된 ID와 PW 와 일치하는 row를 가져온다.
//   mysqlDB.query(sql, function(err, rows, fields) {
//     if (!err) {
//       if (rows[0] != undefined) {
//         res.render("welcome", { name: rows[0]["id"] }); //error가 없고 row[0]값이 있으면 ~/views/welcome.js와 row[0]의 name값을 브라우저로 전송
//       } else {
//         res.render("nodata"); //row[0]값이 없으면 ~/views/nodata.js를 브라우저로 전송
//       }
//     } else {
//       res.send("error : " + err); //현재 화면에 에러메세지 출력
//     }
//   });
// });

// //////////////////////////////////////////////////////////
// //로그인 방법 3 :암호화 방법 & sequelize 사용시
// ///////////////////////////////////////////////////////////
// router.post("/", async function(req, res, next) {
//   let body = req.body;

//   let result = await models.user.findOne({
//     where: {
//       email: body.userEmail
//     }
//   });

//   let dbPassword = result.dataValues.password;
//   let inputPassword = body.password;
//   let salt = result.dataValues.salt;
//   let hashPassword = crypto
//     .createHash("sha512")
//     .update(inputPassword + salt)
//     .digest("hex");

//   if (dbPassword === hashPassword) {
//     console.log("비밀번호 일치");
//     res.redirect("/users");
//   } else {
//     console.log("비밀번호 불일치");
//     res.redirect("/users/login");
//   }
// });

module.exports = router; //모듈에 등록해야 app.js에서 app.use 함수를 통해서 사용 가능
