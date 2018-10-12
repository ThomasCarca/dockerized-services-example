var mongoose = require('mongoose');

var BusModel = new mongoose.Schema({
  type: String
});

// Mongoose Model definition
module.exports = mongoose.model('bus', BusModel, 'bus');