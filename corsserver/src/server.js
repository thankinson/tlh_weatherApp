const express = require("express");
const cors = require("cors");

const apiRouter = require("./apiRouter/apiRoutes")

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(apiRouter);

app.listen(port, () => {
  console.log('Listening on port ', port);
});