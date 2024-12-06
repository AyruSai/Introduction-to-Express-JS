const express = require("express");
const app = express();

// app.get("/", (request, response) => {
//   response.send("Hello World!");
//   //   console.log(request);
//   //   console.log(response);
// });

// app.get("/date", (request, response) => {
//   let date = new Date();
//   response.send(
//     `Today's date is ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
//   );
// });

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
