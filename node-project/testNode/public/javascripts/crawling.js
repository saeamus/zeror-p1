const express = require("express");
const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

var crawling = function() {
  fs.readFile("./public/topnav/index1.html", "utf8", function(err, data) {
    if (err) throw err;

    var $ = cheerio.load(data);
    //console.log(data); //아래와 동일한 결과
    console.log($.html());
    console.log($("ul").children("li").length);
    console.log(
      $("ul")
        .children("li")
        .text()
    );
  });
};

module.exports = crawling;

//   try {
//     let krDay = '';
//     let corner = '';
//     let menu = '';

//     $('table').find('tr').each(function (index, elem) {
//       if (index % 6 === 0) {
//         krDay = $(this).find('th').text().trim();

//         console.log(`${krDay}`);
//       } else {
//         corner = $(this).find('th').text().trim();
//         menu = $(this).find('th').next().text().trim();

//         console.log(`${corner} -> ${menu}`);
//       }
//     });
//   } catch (error) {
//     console.error(error);
//   }
