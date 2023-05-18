const express = require("express");
const app = express();
var cors = require("cors");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

var users = [
  { email: "fiaz@gmail.com", password: "asdf" },
  { email: "awais@gmail.com", password: "asdf" },
  { email: "shahzaib@gmail.com", password: "asdf" },
];
var users1 = ["awais@gmail.com", "fiaz@gmail.com"];
console.log(users[0].password);

app.get("/", (req, res) => {
  res.send("site task");
});

app.post("/login", (req, res) => {
  console.log("post request");
  userEmail = req.body.email;
  userPassword = req.body.password;
  console.log(userEmail);
  var userResult = users.find((e) => e.email === userEmail);
  console.log("userResult value =", userResult);
  if (userResult != undefined) {
    console.log("success");
    res.send(userResult);
  } else {
    console.log(userResult);
    res.send("/login");
  }
  //   var userResult = users1.includes(userEmail);
  //   let obj = users.find((o) => o.email === userEmail);

  //   console.log("i am here");
  //   console.log(userResult);
  //   console.log("userResult");
});
console.log("this is my text");
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:4000`);
});
