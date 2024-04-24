require("dotenv").config();
// va chercher  la dépendance express
const express = require("express");

// stocker la dépendance dans la variable app pour l'utiliser.
const app = express();

// le port du serveur
const port = process.env.PORT;

const helmet = require("helmet");
app.use(express.urlencoded({ extended: true }));

// la route de l'api
const apiRouter = require("./routes/api");

app.use(helmet());

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
