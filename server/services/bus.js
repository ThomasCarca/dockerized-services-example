var Bus = require('../models/bus')

module.exports = {
  getAll,
  getById
}

async function getAll() {
  return await Bus.find();
}

async function getById(_id) {
  return await Bus.findById(_id);
}
