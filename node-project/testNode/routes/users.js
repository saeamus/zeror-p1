//////////////////////////////////////////////////////////////////////////
// 파일명: user.js
// 회원가입 모듈
// 일반 방법과 암호화 방법 sample제시
//
//////////////////////////////////////////////////////////////////////////

const express = require("express");
const router = express.Router();
//const models = require("../models");  //sequelize사용시에만  model 정의
const crypto = require("crypto");
var mysqlDB = require("../conf/saeamus-db");

//회원가입 화면으로 라우팅
router.get("/sign_up", function(req, res, next) {
  res.render("signup");
});

//암호분실 화면으로 라우팅----공사중!!!!
router.get("/pw_reset", function(req, res, next) {
  res.render("construction");
});

///////////////////////////////////////////////////////////////////////////////////////
// 회원가입방법 1 : password암호화 회원 가입
// 내장모듈인 crypto 암호화 모듈을 사용하여 password를 암호화하여 db에 저장
// salt를 사용하여 보안성을 높임
///////////////////////////////////////////////////////////////////////////////////////
router.post("/sign_up", async function(req, res, next) {
  let body = req.body; //req.body.~ 은 html에서 post로 입력받은 username, email, password를 의미(예:body.username==req.body.username)

  let inputPassword = body.password; //body.password의 password는 태그의 name명
  let salt = Math.round(new Date().valueOf() * Math.random()) + ""; //date와 랜덤함수를 이용하여 salt값 생성
  let hashPassword = crypto
    .createHash("sha512") //sha512알고리즘으로 해시 코드 생성
    .update(inputPassword + salt) // 해시코드에 salt를 더해서 보안성을 높임
    .digest("hex"); //인코딩 방식 정의
  var sql =
    "INSERT INTO user_info(userId,email,password,salt)  VALUES(?,?,?,?)"; //query문 user 정보를 db에 저장 , userId는 유니크함

  mysqlDB.query(
    sql,
    [body.username, body.email, hashPassword, salt], // query문의 (?,?,?,?) 를 정의

    function(err, result) {
      if (err) res.send("error : " + err);
      else {
        console.log("1 record inserted");
        res.redirect("/");
      }
    }
  );

  //res.redirect("/users/sign_up"); //이곳에 있으면 회원가입실행시 [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 에러발생
});

// ////////////////////////////////////////////////////////////////////////////////////
// //회원가입방법 2 : 일반회원 가입 sequelize사용
// //db table에 저장된 password가 text형태로 그대로 노출된다.
// //
// ////////////////////////////////////////////////////////////////////////////////////

//
// router.post("/sign_up", function(req, res, next) {
//   let body = req.body;

//   models.user
//     .create({
//       name: body.userName,
//       email: body.userEmail,
//       password: body.password
//     })
//     .then(result => {
//       res.redirect("/users/sign_up");
//     })
//     .catch(err => {
//       console.log(err);
//     });
// });
//

// ////////////////////////////////////////////////////////////////////////////////////
// //회원가입방법 3 : 암호화 & sequelize사용
// //db table에 저장된 password가 text형태로 그대로 노출된다.
// //
// ////////////////////////////////////////////////////////////////////////////////////

// router.post("/sign_up", async function(req, res, next) {
//   let body = req.body;

//   let inputPassword = body.password;
//   let salt = Math.round(new Date().valueOf() * Math.random()) + "";
//   let hashPassword = crypto
//     .createHash("sha512")
//     .update(inputPassword + salt)
//     .digest("hex");

//   let result = models.user.create({
//     name: body.user_name,
//     email: body.email,
//     password: hashPassword,
//     salt: salt
//   });

//   res.redirect("/users/sign_up");
// });

// /////////////////////////////////////////////////////////////////
// // 회원가입방법 4: pbkdf2방식의 암호화----에러발생함.원인 모름
// /////////////////////////////////////////////////////////////////
// router.post("/sign_up", function(req, res, next) {
//   let body = req.body;
//   crypto.randomBytes(64, function(err, buf) {
//     crypto.pbkdf2(
//       body.password,
//       buf.toString("base64"),
//       100000,
//       64,
//       "sha512",
//       async function(err, key) {
//         result = await models.user.create({
//           name: body.userName,
//           email: body.userEmail,
//           password: key,
//           salt: buf
//         });

//         res.redirect("/users/sign_up");
//       }
//     );
//   });
// });

module.exports = router;
