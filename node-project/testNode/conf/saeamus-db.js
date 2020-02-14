var mysql = require("mysql");
var dbconnection = mysql.createConnection({
  host: "database-saeamus.c2m3gb1iap9w.ap-northeast-2.rds.amazonaws.com",
  user: "saeamus",
  password: "saeamus1111!",
  port: 3306,
  database: "saeamus"
});

// connection.connect();

// connection.query("SELECT * from members", function(err, rows, fields) {
//   if (!err) console.log("The solution is: ", rows);
//   else console.log("Error while performing Query.", err);
// });

// connection.end();
module.exports = dbconnection;
