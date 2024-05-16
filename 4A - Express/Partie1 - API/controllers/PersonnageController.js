// va chercher les datas de base des personnages. -- BD
const listePersonnage = require("../data.js");

// avec la méthode index va chercher la liste de personnage est l'affiche en JSON.
module.exports.index = (req, res) => {
 //const listePersonnage = require("../data.js");

  res.json({ msg: listePersonnage, query: req.query });
};

// avec la méthode store va ajouter un personnage dans la liste de personnage.
module.exports.store = (req, res) => {
  //const listePersonnage = require("../data.js");

  const id = listePersonnage[listePersonnage.length - 1].id + 1
  const name = req.body.name;
  const realname = req.body.realname || '';

  let personnageAjouter = {id, name, realname}

  if (name === undefined || name === "") {
    res.status(505).json({mgs: 'Le nom est vide.'})
  }


  listePersonnage.push({ id: id, name: name, realname: realname});
  console.log("Personnage créé");
  res.status(202).json(listePersonnage[listePersonnage.length - 1]);
};

// Correct ou non ? mdr
module.exports.show = (req, res) => {
  const id = parseInt(req.params.id);

 // const listePersonnage = require("../data.js");

  const personnageTrouve = listePersonnage.find(personnage => personnage.id === id);

  if (personnageTrouve) {
    // Si le personnage est trouvé, renvoyer les détails du personnage
    res.status(200).json(personnageTrouve);
  } else {
    // Si le personnage n'est pas trouvé, renvoyer une réponse avec un code 404 (Not Found)
    res.status(404).json({message: "Personnage non trouvé."});
  };
}


  module.exports.delete = (req, res) => {

  // parse le id en int. (car en string)
  const id = parseInt(req.params.id);

  // va chercher la liste de personnages.
  //const listePersonnage = require("../data.js");

  // trouvee l'index avec le id
  index = listePersonnage.findIndex(personnage => personnage.id === id);

  // si personnage trouve 
  if (index !== -1) {
    // Si le personnage est trouvé, renvoyer les détails du personnage avant de le supprimer
    const deletedPersonnage = listePersonnage.splice(index, 1)[0];
    res.status(200).json(deletedPersonnage); // Retourne le personnage supprimé
  } else {
      // Si le personnage n'est pas trouvé, renvoyer une réponse avec un code 404 (Not Found)
      res.status(404).json({ message: "Personnage not found for deletion" });
  }
}

// modifie un personnage avec la méthode update.

// modifie un personnage avec la méthode update.
module.exports.update = (req, res) => {
  // parse le id en int. (car en string)
  var id = parseInt(req.params.id);

  const name = req.body.name;
  const realname = req.body.realname;
  
  // trouvee le personnage avec le id
  const personnageTrouve = listePersonnage.find(personnage => personnage.id === id);

  if (personnageTrouve) {
    // Si le personnage est trouvé, renvoyer les détails du personnage avant de le supprimer
    if ((name === undefined || name === "") && (realname === undefined || realname === "")) {
      res.status(505).json({mgs: 'Le nom et nom réel sont vide.'})
    }

    personnageTrouve.name = name !== undefined ? name : personnageTrouve.name;
    personnageTrouve.realname = realname !== undefined ? realname : personnageTrouve.realname;

    res.status(200).json(personnageTrouve);
  } else {
    // Si le personnage n'est pas trouvé, le créer
    const id = listePersonnage[listePersonnage.length - 1].id + 1
    listePersonnage.push({ id: id, name: name, realname: realname});
    console.log("Personnage créé");
    res.status(202).json(listePersonnage[listePersonnage.length - 1]);    
  }
};

