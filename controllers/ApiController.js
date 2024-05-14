
// Actions du controlleur

// req: request
// res: response

// utilise la méthode GET puis retourne la query.
module.exports.index = (req, res) => {

  res.json({ msg: "get", query: req.query });
};

// utilise la méthode POST puis retourne la body.
module.exports.store = (req, res) => {
  res.json({ msg: "post", body: req.body });
};

// utilise la méthode Update puis retourne la body.
module.exports.update = (req, res) => {
  res.status(405);
  res.json({ msg: "update", body: req.body });
};
