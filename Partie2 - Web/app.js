
require("dotenv").config();

const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const helmet = require("helmet");

const webRouter = require("./routes/web");
//const apiRouter = require("./routes/api");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));

app.use(helmet());

app.use("/", webRouter);
//app.use("/api", apiRouter);

app.listen(port, () => {
 console.log(`Listening at http://localhost:${port}`);
});