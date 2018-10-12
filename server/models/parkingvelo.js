var mongoose = require('mongoose');

var ParkingVeloModel = new mongoose.Schema({
  type: String
});

// Mongoose Model definition
module.exports = mongoose.model('parkingvelo', ParkingVeloModel, 'parkingvelo');