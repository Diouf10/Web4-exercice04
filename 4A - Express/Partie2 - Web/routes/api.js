// va chercher la dépendance express
const express = require("express");
const router = express.Router();

// Les controlleurs de l'api

// la routes de l'api-Controller
const apiController = require("../controllers/ApiController");

// la routes du controller du personnage
const personnageController = require("../controllers/PersonnageController");

// La route du controller  du middleware.
const loggingMiddleware = require("../middleware/Logging");

// utiliser le middleware pour la route.
router.use(loggingMiddleware);


// On va chercher les actions du apiController (i guess ptdr)
router

// routes pour l'api de base
  //.route("/")
  // va chercher les ressources dans l'api
  //.get(apiController.index)
  // va créer une nouvelle ressources dans l'api.
  //.post(apiController.store)
  // modifie les ressources de l'api.
  //.put(apiController.update);

// Routes pour les personnages
router
  .route("/personnages")
  // obtenir les personnages
  .get(personnageController.index)
  // ajouter un personnage
  .post(personnageController.store)
  // ex : http://localhost:3000/personnages?method=post&name=john&realname=bobby
  //.put(personnageController.update);

// Route pour afficher un personnage spécifique en fonction de son ID
router.get("/personnages/:id", personnageController.show);
router.put("/personnages/:id",personnageController.update);
router.delete("/personnages/:id",personnageController.delete);


module.exports = router;
