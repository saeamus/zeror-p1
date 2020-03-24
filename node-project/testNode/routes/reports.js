//const jsreport = require("jsreport");
//const fs = require("fs");
const express = require("express");
const report = express();
const fs = require("fs");
const carbone = require("carbone");

report.post("/report1", function(req, res) {
  var data = req.body.data;
  console.log("post Data:" + data);
  res.send({ res: "버튼이 잘 눌러졌습니다" });
});

report.post("/report2", function(req, res) {
  var repoTitle = req.body.data;
  if (repoTitle == "simple") {
    var data = { firstname: "상훈", lastname: "변" };
    var options = {
      convertTo: "pdf" //can be docx, txt, ...
    };

    carbone.render("./public/reportForm/simple.odt", data, options, function(err, result) {
      if (err) return console.log(err);
      fs.writeFileSync(`public/reportOut/${repoTitle}.pdf`, result);
      res.send({ res: repoTitle });
    });
  }
  if (repoTitle == "movie") {
    var data = [
      {
        movieName: "Matrix",
        actors: [
          {
            firstname: "Keanu",
            lastname: "Reeves"
          },
          {
            firstname: "Laurence",
            lastname: "Fishburne"
          },
          {
            firstname: "Carrie-Anne",
            lastname: "Moss"
          }
        ]
      },
      {
        movieName: "Back To The Future",
        actors: [
          {
            firstname: "Michael",
            lastname: "J. Fox"
          },
          {
            firstname: "Christopher",
            lastname: "Lloyd"
          }
        ]
      },
      {
        movieName: "심청전",
        actors: [
          {
            firstname: "Michael",
            lastname: "J. Fox"
          },
          {
            firstname: "Christopher",
            lastname: "Lloyd"
          }
        ]
      },
      {
        movieName: "아무거나",
        actors: [
          {
            firstname: "Michael",
            lastname: "J. Fox"
          },
          {
            firstname: "Christopher",
            lastname: "Lloyd"
          }
        ]
      },
      {
        movieName: "홍길동전",
        actors: [
          {
            firstname: "Michael",
            lastname: "J. Fox"
          },
          {
            firstname: "Christopher",
            lastname: "Lloyd"
          }
        ]
      }
    ];

    var options = {
      convertTo: "pdf" //can be docx, txt, ...
    };

    carbone.render("./public/reportForm/movies.docx", data, options, function(err, result) {
      if (err) return console.log(err);
      fs.writeFileSync(`public/reportOut/${repoTitle}.pdf`, result);
      res.send({ res: repoTitle });
    });
  }
  if (repoTitle == "flatTable") {
    var data = [
      {
        movieName: "Matrix",
        actors: [
          {
            firstname: "Keanu",
            lastname: "Reeves"
          },
          {
            firstname: "Laurence",
            lastname: "Fishburne"
          },
          {
            firstname: "Carrie-Anne",
            lastname: "Moss"
          }
        ]
      },
      {
        movieName: "Back To The Future",
        actors: [
          {
            firstname: "Michael",
            lastname: "J. Fox"
          },
          {
            firstname: "Christopher",
            lastname: "Lloyd"
          }
        ]
      }
    ];
    var options = {
      convertTo: "pdf" //can be docx, txt, ...
    };

    carbone.render("./public/reportForm/flat_table.ods", data, options, function(err, result) {
      if (err) return console.log(err);
      fs.writeFileSync(`public/reportOut/${repoTitle}.pdf`, result);
      res.send({ res: repoTitle });
    });
  }
});

module.exports = report;
