var AireJeux = require('../models/airejeux')

module.exports = {
  getAll,
  getById
}

async function getAll() {
  return await AireJeux.find();
}

async function getById(_id) {
  return await AireJeux.findById(_id);
}
