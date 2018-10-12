var Banc = require('../models/banc')

module.exports = {
  getAll,
  getById
}

async function getAll() {
  return await Banc.find();
}

async function getById(_id) {
  return await Banc.findById(_id);
}
