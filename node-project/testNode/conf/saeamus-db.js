//
// db 연결 설정
// AWS RDS DB서버의 saeamus db 에 접속한다
//
var mysql = require("mysql");
var dbconnection = mysql.createConnection({
  host: "database-saeamus.c2m3gb1iap9w.ap-northeast-2.rds.amazonaws.com",
  user: "saeamus",
  password: "saeamus1111!",
  port: 3306,
  database: "saeamus"
});

////
////테스트용 local DB
////
// var dbconnection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: "1234",
//   port: 3306,
//   database: "saeamus"
// });

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
