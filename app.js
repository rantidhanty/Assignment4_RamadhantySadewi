require("module-alias/register");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/auth");
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.use("/", router);

app.listen(port, () => {
  console.log(`server running ${port}`);
});
