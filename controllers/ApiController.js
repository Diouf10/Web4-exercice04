
// Actions du controlleur

module.exports.index = (req, res) => {

  res.json({ msg: "get", query: req.query });
};

module.exports.store = (req, res) => {
  res.json({ msg: "post", body: req.body });
};

module.exports.update = (req, res) => {
  res.status(405);
  res.json({ msg: "update", body: req.body });
};
