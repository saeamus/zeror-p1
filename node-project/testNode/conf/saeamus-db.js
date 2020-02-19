//
// db 연결 설정
// AWS RDS DB서버의 saeamus db 에 접속한다
//
var mysql = require("mysql");
var dbconnection = mysql.createConnection({
  host: "호스트주소",
  user: "user name",
  password: "암호",
  port: 3306,
  database: "db name"
});



////
////테스트 커넥션
////
// dbconnection.connect(); //db 접속
// dbconnection.query("SELECT * from members", function(err, rows, fields) {
//   if (!err) console.log("The solution is: ", rows);
//   else console.log("Error while performing Query.", err);
// });

// dbconnection.end();  //db 접속 끊음

module.exports = dbconnection;
