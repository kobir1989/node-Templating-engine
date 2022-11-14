const express = require("express");
const app = express();
const dbConnector = require("./config/db-conncetor");
const port = process.env.PORT || 3000;
const contractRouter = require("./routes/contractRoutes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/api", contractRouter);

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.listen(port, async () => {
  console.log(`Server is Running at Port:${port}`);
  await dbConnector();
});
