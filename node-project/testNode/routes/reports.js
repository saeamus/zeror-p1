//const jsreport = require("jsreport");
//const fs = require("fs");
const express = require("express");
const report = express();
const fs = require("fs");
const carbone = require("carbone");
report.use(express.json());

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

    carbone.render("./public/reportForm/movies_temp.docx", data, options, function(err, result) {
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
  if (repoTitle == "groupsum") {
    var data = [
      {
        jan: 1,
        feb: 2,
        mar: 3,
        apr: 4,
        may: 5,
        jun: 6,
        jul: 7,
        aug: 8,
        sep: 9,
        oct: 10,
        nov: 11,
        dec: 12,
        rowsum: "=sum(left)",
        colsum: "=sum(above)"
      },
      {
        jan: 11,
        feb: 12,
        mar: 13,
        apr: 14,
        may: 15,
        jun: 16,
        jul: 17,
        aug: 18,
        sep: 19,
        oct: 20,
        nov: 21,
        dec: 22,
        rowsum: "=sum(left)",
        colsum: "=sum(above)"
      },
      {
        jan: 21,
        feb: 22,
        mar: 23,
        apr: 24,
        may: 25,
        jun: 26,
        jul: 27,
        aug: 28,
        sep: 29,
        oct: 30,
        nov: 31,
        dec: 32,
        rowsum: "=sum(left)",
        colsum: "=sum(above)"
      },
      {
        jan: 3,
        feb: 12,
        mar: 4,
        apr: 16,
        may: 2,
        jun: 8,
        jul: 1,
        aug: 8,
        sep: 7,
        oct: 10,
        nov: 9,
        dec: 2,
        rowsum: "=sum(left)",
        colsum: "=sum(above)"
      }
    ];
    var options = {
      convertTo: "pdf" //can be docx, txt, ...
    };

    carbone.render("./public/reportForm/groupsum.docx", data, options, function(err, result) {
      if (err) return console.log(err);
      fs.writeFileSync(`public/reportOut/${repoTitle}.pdf`, result);
      res.send({ res: repoTitle });
    });
  }
});

report.post("/report3", function(req, res) {
  //req.body는 array를 못 받아서 일단 arry를 text로 변환해서 서버로 전송하고
  //다시 JSON형식으로 변환한다
  var memberlist = JSON.parse(req.body.memberList);

  //console.log(repoTitle);
  //console.log(req.body.memberList);

  //console.log(memberlist);
  var options = {
    convertTo: "pdf" //can be docx, txt, ...
  };
  if (req.body.title == "list") {
    var repoTitle = "memberList";
    carbone.render("./public/reportForm/memberlist.docx", memberlist, options, function(err, result) {
      if (err) return console.log(err);
      fs.writeFileSync(`public/reportOut/${repoTitle}.pdf`, result);
      res.send({ res: repoTitle });
    });
  }
  if (req.body.title == "person") {
    var repoTitle = "member";
    carbone.render("./public/reportForm/member.docx", memberlist, options, function(err, result) {
      if (err) return console.log(err);
      fs.writeFileSync(`public/reportOut/${repoTitle}.pdf`, result);
      res.send({ res: repoTitle });
    });
  }
});

module.exports = report;
