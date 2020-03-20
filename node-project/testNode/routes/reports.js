//const jsreport = require("jsreport");
//const fs = require("fs");
const express = require("express");
const report = express();
const fs = require("fs");
const jsreport = require("jsreport-core")();

report.post("/report1", function(req, res) {
  var data = req.body.data;
  console.log("post Data:" + data);
  res.send({ res: "버튼이 잘 눌러졌습니다" });
});

report.post("/report2", function(req, res) {
  var repoTitle = req.body.data;
  var request = {
    template: {
      content: "<h1>이 문서 제목은  <%= foo %> 입니다</h1>",
      engine: "ejs",
      recipe: "chrome-pdf"
    },
    data: {
      foo: repoTitle
    }
  };
  // jsreport
  //   .init()
  //   .then(() => {
  //     jsreport.render(request).then(resp => {
  //       // write report buffer to a file
  //       fs.writeFileSync("test_report1.pdf", resp.content);
  //       res.send({ res: repoTitle + "이 정상 발행되었습니다" });
  //     });
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });
  jsreport
    .init()
    .then(() => {
      jsreport.render(request).then(resp => {
        // write report buffer to a file
        fs.writeFileSync(`public/reports/${repoTitle}.pdf`, resp.content);
        res.send({ res: repoTitle });
      });
    })
    .catch(e => {
      console.log(e);
    });
});

module.exports = report;
