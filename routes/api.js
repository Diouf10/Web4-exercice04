// va chercher la dépendance express
const express = require("express");
const router = express.Router();

// Le controlleur de l'api
const apiController = require("../controllers/ApiController");
const personnageController = require("../controllers/PersonnageController");
const loggingMiddleware = require("../middleware/Logging");

router.use(loggingMiddleware);


// On va chercher les actions du apiController (i guess ptdr)
router
  .route("/")
  .get(apiController.index)
  .post(apiController.store)
  .put(apiController.update);

// Routes pour les personnages
router
  .route("/personnages")
  .get(personnageController.index)
  .post(personnageController.store)
  //.put(personnageController.update);

// Route pour afficher un personnage spécifique en fonction de son ID
router.get("/personnages/:id", personnageController.show);


module.exports = router;
