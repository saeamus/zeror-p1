var express = require("express");
var router = express.Router();

var mysqlDB = require("../conf/saeamus-db");
//라우터의 get()함수를 이용해 request URL('/')에 대한 업무처리 로직 정의
/* GET home page. */

router.get("/", function(req, res, next) {
  res.render("login", { title: "Log In Page" });
});

router.post("/", function(req, res, next) {
  var userId = req.body["userId"];
  var userPw = req.body["userPw"];
  mysqlDB.query(
    "select * from members where id='" + userId + "' and pw='" + userPw + "'",
    function(err, rows, fields) {
      if (!err) {
        if (rows[0] != undefined) {
          res.render("welcome", { id: rows[0]["id"] });
        } else {
          res.render("nodata");
        }
      } else {
        res.send("error : " + err);
      }
    }
  );
});

//모듈에 등록해야 app.js에서 app.use 함수를 통해서 사용 가능
module.exports = router;
