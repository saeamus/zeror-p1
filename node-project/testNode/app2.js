//////////////////////////////////////////////////////////////////////////////////////
// 파일명: app2.js
// 20200218 James
// 테스트용 simple server 파일.
// 현재 프로젝트에는 사용안함.
//
// 테스트방법:
// 파일명을 app.js로 변경하고 실행하면
// 호스트주소:8000 접속시
// "Hello ZERO-R !" 을 화면에 출력
///////////////////////////////////////////////////////////////////////////////////////

var express = require("express");
var app = express();

//Get Home Page
app.get("/", function(req, res) {
  res.send("Hello ZERO-R !");
});

//서버 생성
app.listen(8000, function() {
  console.log("Example app listening on port 8000");
});
