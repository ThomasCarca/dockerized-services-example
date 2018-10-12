var Bar = require('../models/bar')

module.exports = {
  getAll,
  getById
}

async function getAll() {
  return await Bar.find();
}

async function getById(_id) {
  return await Bar.findById(_id);
}
