const axios = require('axios');

// Importez le fichier de données des personnages
const listePersonnage = require("../data.js");

// Contrôleur pour la route index
module.exports.index = async (req, res) => {
    try {
        // Faites une requête à votre API pour obtenir les données des personnages
        const reponse = await axios.get('http://localhost:3000/personnages');
        const personnages = reponse.data; // Supposons que les données sont au format JSON et sont une liste d'objets de personnages
        
        // Rendre la vue index.ejs en passant les données des personnages
        res.render("index", { personnages });
    } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
};