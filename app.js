const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");
const newDate = addDays(new Date(), 100);
app.get("/", (request, response) => {
  response.send(
    `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
