const listePersonnage = require("../data");

module.exports.index = (req, res) => {
  const listePersonnage = require("../data.js");

  res.json({ msg: listePersonnage, query: req.query });
};

module.exports.store = (req, res) => {
  const listePersonnage = require("../data.js");

  const id = req.body.id
  const name = req.body.name;
  const realname = req.body.realname;

  let personnageAjouter = {id, name, realname}

  if (listePersonnage.find(personnage => personnage.id == id)) {
    res.status(505).json({mgs: 'HEY DEJA CRÉER WTF'})
  }

  listePersonnage.push({ id: id, name: name,   realname: realname});

  res.status(202).json(listePersonnage[listePersonnage.length - 1]);
};

// Correct ou non ? mdr
module.exports.show = (req, res) => {
  const id = parseInt(req.params.id);

  const listePersonnage = require("../data.js");

  const personnageTrouve = listePersonnage.find(personnage => personnage.id === id);

  if (personnageTrouve) {
    // Si le personnage est trouvé, renvoyer les détails du personnage
    res.status(200).json(personnageTrouve);
  } else {
    // Si le personnage n'est pas trouvé, renvoyer une réponse avec un code 404 (Not Found)
    res.status(404).json({message: "Personnage non trouvé"});
  };

// Correct ou non ? mdr
  module.exports.delete = (req, res) => {
    const id = parseInt(req.params.id);

    const listePersonnage = require("../data.js");

    const personnageTrouve = listePersonnage.find(personnage => personnage.id === id);

    if (personnageTrouve) {
      // Si le personnage est trouvé, renvoyer les détails du personnage avant de le supprimer
      res.status(200).json(personnageTrouve);
      listePersonnage.splice(personnageTrouve.id, 1);
    } else {
      // Si le personnage n'est pas trouvé, renvoyer une réponse avec un code 404 (Not Found)
      res.status(404).json({message: "Personnage non trouvé pour suppression"});
    }
  }


  module.exports.update = (req, res) => {
    res.status(405);
    res.json({msg: "update", body: req.body});

  };
}
