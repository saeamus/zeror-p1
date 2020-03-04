//////////////////////////////////////////////////////////////////////////
// 파일명: module.js
// 20200304 James
// 메뉴선택시 해당 페이지로 이동하게 해주는 라우터
//
//
//////////////////////////////////////////////////////////////////////////

const express = require("express");
const router = express.Router();
const fs = require("fs");
const ejs = require("ejs");
var mysqlDB = require("../conf/saeamus-db");

var t1sub1sub1 = fs.readFileSync("./views/m-t1sub1sub1.ejs", "utf8");
var t1sub1sub2 = fs.readFileSync("./views/m-t1sub1sub2.ejs", "utf8");

//menu 화면으로 라우팅
router.get("/t1sub1sub1", function(req, res, next) {
  var url = req.url;
  var url1 = url.replace("/", "");
  var url2 = url1.toUpperCase();
  console.log(url2);
  var t1sub1sub1_ren = ejs.render(t1sub1sub1, { title: url2 }); //title값을 넘기기위해서 m-t1sub1sub1.ejs를 미리 랜더링
  res.render("layout", { name: username, title: url2, content: t1sub1sub1_ren });
});
//menu 화면으로 라우팅
router.get("/t1sub1sub2", function(req, res, next) {
  var t1sub1sub2_ren = ejs.render(t1sub1sub2, { title: "T1 SUB1 SUB2" }); //title값을 넘기기위해서 m-t1sub1sub2.ejs를 미리 랜더링
  res.render("layout", { name: username, title: "T1 SUB1 SUB2", content: t1sub1sub2_ren });
});
//menu 화면으로 라우팅
router.get("/t1sub1sub3", function(req, res, next) {
  res.render("layout", { name: "T1 SUB1 SUB3", title: "T1 SUB1 SUB3" });
});
//menu 화면으로 라우팅
router.get("/t1sub1sub4", function(req, res, next) {
  res.render("layout", { name: "T1 SUB1 SUB4", title: "T1 SUB1 SUB4" });
});
//menu 화면으로 라우팅
router.get("/t1sub2", function(req, res, next) {
  res.render("layout", { name: "T1 SUB2", title: "T1 SUB2" });
});
//menu 화면으로 라우팅
router.get("/t1sub3", function(req, res, next) {
  res.render("layout", { name: "T1 SUB3", title: "T1 SUB3" });
});
//menu 화면으로 라우팅
router.get("/t1sub4", function(req, res, next) {
  res.render("layout", { name: "T1 SUB4", title: "T1 SUB4" });
});
//menu 화면으로 라우팅
router.get("/t1sub5", function(req, res, next) {
  res.render("layout", { name: "T1 SUB5", title: "T1 SUB5" });
});

//menu 화면으로 라우팅
router.get("/t2", function(req, res, next) {
  res.render("layout", { name: "TOP Menu2", title: "TOP Menu2" });
});

module.exports = router;
