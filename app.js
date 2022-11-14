const express = require("express");
const app = express();
const dbConnector = require("./config/db-conncetor");
const port = process.env.PORT || 3000;
const contractRouter = require("./routes/contractRoutes");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/contract", contractRouter);

app.get("/", (req, res) => {
  res.redirect("/contract");
});

app.listen(port, async () => {
  console.log(`Server is Running at Port:${port}`);
  await dbConnector();
});
