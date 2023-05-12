const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("site task");
});

app.get("/about", (req, res) => {
  res.send("site task about");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:4000`);
});
