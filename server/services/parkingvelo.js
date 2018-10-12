var ParkingVelo = require('../models/parkingvelo')

module.exports = {
  getAll,
  getById
}

async function getAll() {
  return await ParkingVelo.find();
}

async function getById(_id) {
  return await ParkingVelo.findById(_id);
}
