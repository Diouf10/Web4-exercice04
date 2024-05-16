require("dotenv").config();

// va chercher  la dépendance express
const express = require("express");

// stocker la dépendance dans la variable app pour l'utiliser.
const app = express();

// le port du serveur
const port = process.env.PORT;

// va chercher la dépendances de helmey
const helmet = require("helmet");

app.use(express.urlencoded({ extended: true }));

// la route de l'api, va checher dans le dossier routes, le fichier api.js
const apiRouter = require("./routes/api");

app.use(helmet());

// à partir de '/' va chercher la la route de apiRouter et l'utilise.
app.use("/", apiRouter);

// écoute le port 3000 du serveur.
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
