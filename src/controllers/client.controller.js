const clientService = require("../services/client.service");

const index = async (req, res) => {
  res.json({
    clients: await clientService.index(),
  });
};

const save = async (req, res) => {
  console.log(req.body);

  res.json({
    Client: await clientService.save(req.body),
  });
};

const remove = async (req, res) => {
  res.json({
    Client: await clientService.delete(req.params.id),
  });
};

const update = async (req, res) => {
  res.json({
    Client: await clientService.update(req.params.id, req.body),
  });
};

module.exports = { index, save, remove, update };
