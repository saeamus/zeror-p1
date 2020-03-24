const fs = require("fs");
const carbone = require("carbone");
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

carbone.render("./node_modules/carbone/examples/movies.docx", data, function(err, result) {
  if (err) return console.log(err);
  fs.writeFileSync("movies_result.docx", result);
});

carbone.render("./node_modules/carbone/examples/flat_table.ods", data, function(err, result) {
  if (err) return console.log(err);
  fs.writeFileSync("flat_table_result.ods", result);
});
carbone.render("./node_modules/carbone/examples/movies.docx", data, options, function(err, result) {
  if (err) return console.log(err);
  fs.writeFileSync("result1.pdf", result);
  process.exit(); // to kill automatically LibreOffice workers
});
