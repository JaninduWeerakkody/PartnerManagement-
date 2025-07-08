const { registerHub, removeHub } = require('../services/notificationService');
const uuid = require('../utils/uuid');

// POST /hub
function register(req, res) {
  const id = uuid();
  const listener = { id, ...req.body };
  registerHub(listener);
  res.status(201).json({ id });
}

// DELETE /hub/:id
function remove(req, res) {
  removeHub(req.params.id);
  res.status(204).send();
}

module.exports = { register, remove }; 